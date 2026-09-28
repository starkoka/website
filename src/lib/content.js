import activitiesData from '../data/activities.json';
import presentation from '../data/presentation.json';
import profile from '../data/profile.json';
import { newestFirst } from './timeline';

export const activities = activitiesData.activities;
const activitiesById = new Map(activities.map((activity) => [activity.id, activity]));

export function getActivity(id) {
  return activitiesById.get(id);
}

export function getLatestEvent(activity) {
  return [...activity.events].sort(newestFirst)[0];
}

export function getActivityOverview(activity) {
  return activity.description || '';
}

export function getActivityDetailText(activity) {
  return activity.detail?.body || activity.description || '';
}

export function getActivityDetailEvents(activity) {
  return activity.detail?.eventHistory ? [...activity.events].sort(newestFirst) : [];
}

export function getActivityLink(activity, event) {
  if (activity.socialName) {
    const social = getSocial(activity.socialName);
    return social ? { href: social.url, label: activity.linkText || social.name } : null;
  }
  if (event?.linkId) {
    const link = activity.links?.find((entry) => entry.id === event.linkId);
    if (link) return { href: link.url, label: event.linkText || link.label };
  }
  if (activity.internal && activity.slug) {
    return { href: `/works/${activity.slug}`, label: event?.linkText || activity.homepage?.linkText || activity.linkText || `${activity.title}を見る` };
  }
  const link = activity.links?.[0];
  return link ? { href: link.url, label: event?.linkText || link.label } : null;
}

export function getTimelineEvents() {
  return [
    ...activities.flatMap((activity) => activity.events.map((event) => ({
      ...event,
      key: `${activity.id}:${event.id}`,
      activityId: activity.id,
      title: event.title || activity.title,
      description: event.description || activity.description,
      link: getActivityLink(activity, event),
    }))),
    ...profile.events.map((event) => ({ ...event, key: `profile:${event.id}` })),
  ];
}

export function getRecentEvents(limit = 3) {
  const seen = new Set();
  return getTimelineEvents()
    .filter((event) => !event.planned && !['life', 'education'].includes(event.type))
    .sort(newestFirst)
    .filter((event) => {
      if (!event.activityId) return true;
      if (seen.has(event.activityId)) return false;
      seen.add(event.activityId);
      return true;
    })
    .slice(0, limit);
}

export function getWorksCategories() {
  return presentation.worksCategories.map((category) => ({
    ...category,
    items: activities.filter((activity) => activity.category === category.id && activity.works !== false)
      .sort((a, b) => category.id === 'creation' ? 0 : newestFirst(
        { date: a.events.map((event) => event.date).sort().at(-1) || '0000-01' },
        { date: b.events.map((event) => event.date).sort().at(-1) || '0000-01' }
      )),
  }));
}

export function getFeaturedActivities() {
  return presentation.featuredActivityIds.map(getActivity);
}

export function getMedia(activity, id) {
  return activity.media?.find((media) => media.id === id);
}

export function getTimelineFilters() {
  return presentation.timelineFilters;
}

export function getCurrentAffiliation(short = false) {
  const current = profile.affiliations.current;
  return short ? current.short : current.full;
}

export function getSocial(name) {
  return profile.socials.find((social) => social.name === name);
}

export function getHomeSocials() {
  return presentation.socialActivityNames.map(getSocial);
}

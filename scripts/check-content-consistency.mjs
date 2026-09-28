import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const read = (name) => JSON.parse(readFileSync(new URL(`../src/data/${name}.json`, import.meta.url)));
const activities = read('activities').activities;
const profile = read('profile');
const presentation = read('presentation');
const root = new URL('../public', import.meta.url).pathname;
const unique = (values, label) => assert.equal(new Set(values).size, values.length, `${label} must be unique`);
const activityIds = activities.map((activity) => activity.id);
const categories = presentation.worksCategories.map((category) => category.id);
const validDate = /^\d{4}-(0[1-9]|1[0-2])(?:-(0[1-9]|[12]\d|3[01]))?$/;

unique(activityIds, 'Activity IDs');
unique(categories, 'Works category IDs');
assert.ok(profile.affiliations.current.full && profile.affiliations.current.short, 'Current affiliation needs both names');

for (const activity of activities) {
  assert.ok(activity.id && activity.title, `Activity needs ID and title: ${activity.id}`);
  if (activity.works !== false) assert.ok(categories.includes(activity.category), `${activity.id}: unknown Works category`);
  if (activity.internal) assert.ok(activity.slug && activity.detail, `${activity.id}: detail page needs slug and detail`);
  if (activity.homepage) assert.ok(activity.internal && activity.homepage.imageId, `${activity.id}: featured work needs an image`);
  if (activity.socialName) assert.ok(profile.socials.some((social) => social.name === activity.socialName), `${activity.id}: unknown social account`);
  unique(activity.events.map((event) => event.id), `${activity.id} event IDs`);
  unique((activity.links || []).map((link) => link.id), `${activity.id} link IDs`);
  for (const link of activity.links || []) {
    assert.ok(link.label && /^https?:\/\//.test(link.url), `${activity.id}/${link.id}: link needs a label and URL`);
  }
  assert.ok(!activity.detail?.links, `${activity.id}: put detail links in activity.links`);
  if (activity.detail?.eventHistory) assert.ok(activity.events.length > 0, `${activity.id}: event history needs events`);
  unique((activity.media || []).map((media) => media.id), `${activity.id} media IDs`);
  for (const event of activity.events) {
    assert.match(event.date, validDate, `${activity.id}/${event.id}: invalid date`);
    assert.ok(event.type, `${activity.id}/${event.id}: missing Timeline type`);
    if (event.type === 'research') assert.ok(event.paperTitle, `${activity.id}/${event.id}: missing paper title`);
    if (event.linkId) assert.ok(activity.links?.some((link) => link.id === event.linkId), `${activity.id}/${event.id}: missing link`);
  }
  for (const media of activity.media || []) {
    assert.ok(existsSync(join(root, media.src.replace(/^\//, ''))), `${activity.id}: missing image ${media.src}`);
  }
  for (const imageId of [activity.homepage?.imageId, activity.previewImageId].filter(Boolean)) {
    const media = activity.media?.find((entry) => entry.id === imageId);
    assert.ok(media?.width && media?.height && media?.alt, `${activity.id}: image ${imageId} needs size and alt text`);
  }
}

unique(activities.filter((activity) => activity.slug).map((activity) => activity.slug), 'Detail page slugs');
for (const id of presentation.featuredActivityIds) {
  assert.ok(activityIds.includes(id), `Unknown selected activity ${id}`);
}
for (const name of presentation.socialActivityNames) {
  assert.ok(profile.socials.some((social) => social.name === name), `Unknown social account ${name}`);
}
const types = presentation.timelineFilters.flatMap((group) => group.types);
unique(types, 'Timeline filter types');
for (const event of [...activities.flatMap((activity) => activity.events), ...profile.events]) {
  assert.ok(types.includes(event.type), `Uncategorized Timeline event: ${event.title || event.id}`);
}
for (const event of profile.events) assert.match(event.date, validDate, `${event.id}: invalid date`);
unique(profile.events.map((event) => event.id), 'Profile event IDs');

console.log(`Checked ${activities.length} activities, ${activities.flatMap((activity) => activity.events).length + profile.events.length} Timeline events, and ${activities.filter((activity) => activity.category && activity.works !== false).length} Works entries.`);

const monthFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  timeZone: 'UTC',
});
const dayFormatter = new Intl.DateTimeFormat('ja-JP', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  timeZone: 'UTC',
});

export function formatTimelineDate(event) {
  const [year, month, day] = event.date.split('-').map(Number);
  const date = new Date(Date.UTC(year, month - 1, day || 1));
  return day ? dayFormatter.format(date) : monthFormatter.format(date);
}

export function formatTimelineMonth(event) {
  const [year, month] = event.date.split('-').map(Number);
  return monthFormatter.format(new Date(Date.UTC(year, month - 1, 1)));
}

export function timelineSortKey(event) {
  const [year, month, day] = event.date.split('-').map(Number);
  const sortDay = day || (event.period === 'early' ? 5 : event.period === 'late' ? 25 : 15);
  return year * 10000 + month * 100 + sortDay;
}

export function newestFirst(a, b) {
  return timelineSortKey(b) - timelineSortKey(a);
}

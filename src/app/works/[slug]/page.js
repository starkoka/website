import { notFound } from 'next/navigation';
import WorksPage from '../../../../components/worksPage';
import { activities } from '../../../lib/content';

function getAllDetailItems() {
  return activities.filter((item) => item.slug && item.detail);
}

export function generateStaticParams() {
  return getAllDetailItems().map((item) => ({ slug: item.slug }));
}

export default function WorkDetailPage({ params }) {
  const activity = getAllDetailItems().find((item) => item.slug === params.slug);
  if (!activity) notFound();

  return <WorksPage activity={activity} />;
}

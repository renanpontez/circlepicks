import { getTranslations } from 'next-intl/server';

export default async function AdminDashboardPage() {
  const t = await getTranslations('admin');

  return (
    <div>
      <h1 className="text-2xl font-bold text-dark-grey mb-6">
        {t('dashboard.title')}
      </h1>
      <p className="text-medium-grey">
        {t('dashboard.description')}
      </p>
    </div>
  );
}

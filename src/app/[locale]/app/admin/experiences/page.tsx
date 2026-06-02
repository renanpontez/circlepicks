import { getTranslations } from 'next-intl/server';
import { AdminExperienceList } from '@/features/admin/components/AdminExperienceList';

export default async function AdminExperiencesPage() {
  const t = await getTranslations('admin');

  return (
    <div>
      <h1 className="text-2xl font-bold text-dark-grey mb-6">
        {t('experiences.title')}
      </h1>
      <AdminExperienceList />
    </div>
  );
}

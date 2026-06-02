import { redirect } from 'next/navigation';
import { getAdminUser } from '@/lib/auth/getAdminUser';
import { routes, type Locale } from '@/lib/routes';
import { getLocale } from 'next-intl/server';
import { AdminNav } from '@/features/admin/components/AdminNav';

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const admin = await getAdminUser();
  const locale = await getLocale() as Locale;

  if (!admin) {
    redirect(routes.app.feed(locale));
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="mb-6">
        <AdminNav />
      </div>
      {children}
    </div>
  );
}

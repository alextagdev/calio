import { isAdmin } from '@/lib/admin-auth';
import { redirect } from 'next/navigation';
import LoginForm from './LoginForm';

export default async function AdminLoginPage() {
  const authed = await isAdmin();
  if (authed) {
    redirect('/admin');
  }

  return <LoginForm />;
}

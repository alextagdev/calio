import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login Admin | Calio',
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  // No site navbar/footer, no auth redirect — pure login screen
  return <>{children}</>;
}

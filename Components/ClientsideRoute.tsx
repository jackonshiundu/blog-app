'use client';

import Link from 'next/link';

function ClientsideRoute({
  children,
  route,
}: {
  children: React.ReactNode;
  route: string;
}) {
  return <Link href={route}>{children}</Link>;
}

export default ClientsideRoute;

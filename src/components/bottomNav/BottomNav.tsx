'use client';

import { IconHome, IconFunds, IconUser } from '../icons/icons';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const items = [
  { href: '/', title: 'خانه', Icon: IconHome, id: 1 },
  { href: '/funds', title: 'صندوق‌ها', Icon: IconFunds, id: 2 },
  { href: '/account', title: 'سرمایه من', Icon: IconUser,id: 3 },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 bg-white pb-[max(env(safe-area-inset-bottom),0px)]">
      <div className="max-w-sm mx-auto grid grid-cols-3">
        {items.map(({ href, title, Icon,id }) => {
          const active = pathname === href;
          return (
            <Link
              key={id}
              href={href}
              className={[
                'relative flex flex-col items-center text-[11px]',
                'py-2 pt-3',
                'border-t-0 border-transparent',
                active ? 'text-accent-600' : 'text-gray-600',
              ].join(' ')}
            >
              {active && (
                <span className="pointer-events-none absolute top-0 left-4 right-4 h-0.5 bg-accent-600 rounded-full" />
              )}

              <div className={`w-9 h-9 rounded-2xl flex items-center justify-center`}>
                <Icon />
              </div>
              <span className="mt-1">{title}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

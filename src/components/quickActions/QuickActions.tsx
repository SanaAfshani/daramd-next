import { IconSwap, IconBag, IconCart, IconDoc } from '../icons/icons';

import type { ComponentType, SVGProps } from 'react';

type Action = {
  key: string;
  title: string;
  Icon: ComponentType<SVGProps<SVGSVGElement>>;
  href?: string;
};
const actions: Action[] = [
  { key: 'buy', title: 'خرید', Icon: IconCart },
  { key: 'sell', title: 'فروش', Icon: IconBag },
  { key: 'convert', title: 'تبدیل', Icon: IconSwap },
  { key: 'txs', title: 'تراکنش‌ها', Icon: IconDoc },
];

export default function QuickActions() {
  return (
    <div className="px-4 mt-4 grid grid-cols-3">
      {actions.map(({ key, title, Icon }) => (
        <button key={key} className="flex flex-col items-center gap-2 py-3">
          <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center transition shadow-sm border border-gray-100 hover:border-gray-200 active:scale-[0.98] justify-center">
            <Icon className="text-brand-600" />
          </div>
          <span className="text-xs">{title}</span>
        </button>
      ))}
    </div>
  );
}

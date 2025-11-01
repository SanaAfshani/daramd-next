'use client';

import { IconMenu, IconBell } from '../icons/icons';

export default function TopBar() {
  return (
    <div className="flex items-center justify-between py-3 px-4 border-b border-gray-200 mb-2">
      <div className="text-base font-semibold">حساب درآمد ویژه</div>
      <div className="w-10" />
      <div className="flex items-center gap-3 text-gray-700">
        <button aria-label="اعلان‌ها" className="p-2 rounded-xl hover:bg-gray-100 relative">
          <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-orange-400 rounded-full" />
          <IconBell />
        </button>
        <button aria-label="منو" className="p-2 rounded-xl hover:bg-gray-100">
          <IconMenu />
        </button>
      </div>
    </div>
  );
}

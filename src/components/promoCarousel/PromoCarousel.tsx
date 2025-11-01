'use client';

import { useEffect, useState } from 'react';
import { EyeIcon, EyeOffIcon, RefreshIcon } from '@/components/icons/icons';

const slides = [
  {
    id: 1,
    title: 'حساب درآمد ویژه',
    desc: 'سود روز شمار و مؤثر سالانه ۲۶ درصد',
    balance: '۲۸,۵۰۰,۰۰۰',
  },
  {
    id: 2,
    title: 'قرعه‌کشی‌های ماهانه',
    desc: 'با هر ۱۰۰ هزار تومان یک امتیاز بگیرید',
    balance: '۲۸,۵۰۰,۰۰۰',
  },
  {
    id: 3,
    title: 'بدون کارمزد مخفی',
    desc: 'شفافیت کامل در تراکنش‌ها و سود',
    balance: '۲۸,۵۰۰,۰۰۰',
  },
];

const themes = [
  { card: 'bg-brand-700', blob1: 'bg-brand-600', blob2: 'bg-brand-800' },
  { card: 'bg-orange-500', blob1: 'bg-orange-400', blob2: 'bg-orange-600' },
  { card: 'bg-sky-600', blob1: 'bg-sky-500', blob2: 'bg-sky-700' },
];

export default function PromoCarousel() {
  const [index, setIndex] = useState(0);
  const [showBalance, setShowBalance] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % slides.length), 3500);
    return () => clearInterval(t);
  }, []);

  const s = slides[index];
  const t = themes[index];

  return (
    <div className="px-4">
      <div className="flex items-center justify-center gap-1.5 pb-2">
        {slides.map((slide, i) => (
          <span
            key={slide.id}
            className={`h-1.5 rounded-full transition-all ${i === index ? 'w-5 bg-orange-400' : 'w-1.5 bg-gray-300'}`}
          />
        ))}
      </div>
      <div
        className={[
          'relative overflow-hidden rounded-2xl text-white shadow-card',
          t.card,
          'p-4 h-44',
          'ring-1 ring-white/10',
        ].join(' ')}
      >
        <div
          className={`absolute -top-28 -left-28 w-64 h-64 rounded-full ${t.blob1} opacity-25 blur-2xl`}
        />
        <div
          className={`absolute -bottom-32 -right-36 w-72 h-72 rounded-full ${t.blob2} opacity-25 blur-2xl`}
        />

        <div className="relative mt-10 flex flex-col">
          <div className="text-center">
            <div className="text-[13px] opacity-90">{s.title}</div>
            <div className="mt-1 text-sm font-bold leading-6">{s.desc}</div>
          </div>

          <div className="mt-2 mb-2 h-px bg-white/15" />
          <div className="flex mt-4 items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                type="button"
                aria-label={showBalance ? 'مخفی کردن موجودی' : 'نمایش موجودی'}
                title={showBalance ? 'مخفی کردن موجودی' : 'نمایش موجودی'}
                onClick={() => setShowBalance((v) => !v)}
                className="p-1 outline-none"
              >
                {!showBalance ? <EyeOffIcon /> : <EyeIcon />}
              </button>
              <span className="text-[12px] opacity-90">موجودی</span>
            </div>
            <div className="flex items-center font-bold tracking-wider tabular-nums leading-none">
              <span className="text-[15px]">{showBalance ? s.balance : '****'}</span>
              <span className="ms-1 align-middle text-[11px] font-normal opacity-90 ml-2">
                ریال
              </span>
              <RefreshIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from 'next';
import './globals.css';
import { Vazirmatn } from 'next/font/google';

const vazir = Vazirmatn({
  subsets: ['arabic'],
  weight: ['300', '400', '500', '700', '800'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'حساب درآمد ویژه - MVP',
  description: 'نمونه‌ی ساده‌ی رابط کاربری به زبان فارسی با Next.js و Tailwind CSS',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={vazir.className + ' mobile-shell pb-[calc(88px+env(safe-area-inset-bottom))]'}
      >
        {children}
      </body>
    </html>
  );
}

import { sampleTransactions } from '@/lib/data';
import {fmt, formatPersianDate} from "@/utils/utils";

export default function Transactions() {
  return (
    <div className="px-4 mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-sm">آخرین تراکنش‌ها</h3>
        <button className="text-accent-600 text-xs">مشاهده همه</button>
      </div>
      <div className="space-y-2">
        {sampleTransactions.map((tx) => (
          <div key={tx.id} className="card px-3 py-3 flex items-center justify-between">
            <div className="">
              <div className="text-sm font-medium">{tx.title}</div>
              <div className="text-xs text-gray-500 mt-0.5">{formatPersianDate(tx.date)}</div>
            </div>
            <div
              className={`text-sm font-bold ${tx.type === 'in' ? 'text-emerald-600' : 'text-gray-700'}`}
            >
              {tx.type === 'in' ? '+' : '-'} {fmt(tx.amount)}{' '}
              <span className="text-xs font-normal">تومان</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

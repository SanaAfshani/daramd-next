import { IconPlay } from '../icons/icons';

export default function VideoCard() {
  return (
    <div className="px-4 mt-6">
      <div className="text-sm font-semibold mb-2">ویدیو آموزشی</div>
      <div className="relative bg-gray-50 border border-gray-200 rounded-3xl overflow-hidden h-40 flex items-center justify-center">
        <button
          className="w-14 h-14 rounded-full bg-brand-600 text-white flex items-center justify-center shadow-card active:scale-95 transition"
          aria-label="پخش ویدیو"
        >
          <IconPlay />
        </button>
        <div className="absolute bottom-3 right-4 text-[11px] text-gray-600">
          آشنایی با حساب درآمد ویژه
        </div>
      </div>
    </div>
  );
}

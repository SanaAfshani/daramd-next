import TopBar from '@/components/topBar/TopBar';
import PromoCarousel from '@/components/promoCarousel/PromoCarousel';
import QuickActions from '@/components/quickActions/QuickActions';
import VideoCard from '@/components/videoCard/VideoCard';
import Transactions from '@/components/transactions/Transactions';
import BottomNav from '@/components/bottomNav/BottomNav';

export default function Page() {
  return (
    <main className="pb-[88px]">
      <TopBar />
      <PromoCarousel />
      <QuickActions />
      <VideoCard />
      <Transactions />
      <BottomNav />
    </main>
  );
}

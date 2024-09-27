// import { TopHeaderConnectButton } from '@/components/header/th-connect-button';
import { WalletInfo } from '@/components/wallet-info';

export async function TopHeader() {
  return (
    <section className="container max-w-screen-2xl flex justify-between items-center text-xs mb-2">
      <div className="flex justify-between gap-8">
        <div className="flex items-center gap-2">
          <div>24h Volume</div>
          <div className="text-indigo-500">$67,203,197,716</div>
          <div className="text-red-500">-41.69% </div>
        </div>
        <div className="flex items-center gap-2">
          <div>Open Interest </div>
          <div className="text-indigo-500">$51,180,828,840</div>
          <div className="text-green-500">+1.02% </div>
        </div>
        <div className="flex items-center gap-2">
          <div>24h Liquidation</div>
          <div className="text-indigo-500"> $50,908,201 </div>
          <div className="text-red-500">-48.36% </div>
        </div>
        <div className="flex items-center gap-2">
          <div>24h Long/Short</div>
          <div className="text-indigo-500">49.22%/50.78%</div>
        </div>
      </div>
      {/* <TopHeaderConnectButton /> */}
      <WalletInfo />
    </section>
  );
}

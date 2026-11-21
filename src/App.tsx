import { AdsterraBanner } from './components/AdsterraBanner';

const AD_320X50 = {
  adKey: 'ac5e7093aa12d7d70f1bad691ea22e69',
  width: 320,
  height: 50,
  scriptSrc: 'https://bicea.org/22/ac5e7093aa12d7d70f1bad691ea22e69',
};

const AD_728X90 = {
  adKey: '484c207fa415194044d34f9cf2922bcb',
  width: 728,
  height: 90,
  scriptSrc: 'https://bicea.org/22/484c207fa415194044d34f9cf2922bcb',
};

export default function App() {
  return (
    <main className="min-h-screen w-full bg-white px-2 py-3 flex flex-col items-center justify-center gap-3 overflow-x-hidden">
      <AdsterraBanner {...AD_728X90} slotId="728-1" />

      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-3">
        <AdsterraBanner {...AD_320X50} slotId="320-1" />
        <AdsterraBanner {...AD_320X50} slotId="320-2" />
        <AdsterraBanner {...AD_320X50} slotId="320-3" />
      </div>

      <AdsterraBanner {...AD_728X90} slotId="728-2" />

      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-3">
        <AdsterraBanner {...AD_320X50} slotId="320-4" />
        <AdsterraBanner {...AD_320X50} slotId="320-5" />
        <AdsterraBanner {...AD_320X50} slotId="320-6" />
      </div>

      <AdsterraBanner {...AD_728X90} slotId="728-3" />

      <div className="w-full max-w-6xl flex flex-wrap items-center justify-center gap-3">
        <AdsterraBanner {...AD_320X50} slotId="320-7" />
        <AdsterraBanner {...AD_320X50} slotId="320-8" />
        <AdsterraBanner {...AD_320X50} slotId="320-9" />
      </div>

      <AdsterraBanner {...AD_728X90} slotId="728-4" />
    </main>
  );
}

import { AdsterraBanner } from './components/AdsterraBanner';

const AD_728X90 = {
  adKey: '484c207fa415194044d34f9cf2922bcb',
  width: 728,
  height: 90,
  scriptSrc: 'https://bicea.org/22/484c207fa415194044d34f9cf2922bcb',
};

const AD_300X250 = {
  adKey: 'b74a8d52575ebfa67f8672835b8e5c9d',
  width: 300,
  height: 250,
  scriptSrc: 'https://bicea.org/22/b74a8d52575ebfa67f8672835b8e5c9d',
};

const AD_320X50 = {
  adKey: 'ac5e7093aa12d7d70f1bad691ea22e69',
  width: 320,
  height: 50,
  scriptSrc: 'https://bicea.org/22/ac5e7093aa12d7d70f1bad691ea22e69',
};

const AD_160X600_LIST = [
  {
    adKey: 'f0e5dc8a2c6ddf0a05b800e2dee4c505',
    width: 160,
    height: 600,
    scriptSrc: 'https://bicea.org/22/f0e5dc8a2c6ddf0a05b800e2dee4c505',
    slotId: '160x600-1',
  },
  {
    adKey: '685706635c0a3aef59e94733fc4da8bf',
    width: 160,
    height: 600,
    scriptSrc: 'https://bicea.org/22/685706635c0a3aef59e94733fc4da8bf',
    slotId: '160x600-2',
  },
  {
    adKey: '749aa7ec5b76c69d55e8728cb5364514',
    width: 160,
    height: 600,
    scriptSrc: 'https://bicea.org/22/749aa7ec5b76c69d55e8728cb5364514',
    slotId: '160x600-3',
  },
];

export default function App() {
  return (
    <main className="w-full flex flex-col xl:flex-row items-center justify-center gap-4 overflow-x-hidden">
      <div className="w-full max-w-[728px] flex flex-col items-center justify-center gap-4">
        <AdsterraBanner {...AD_728X90} slotId="728-1" />
        <AdsterraBanner {...AD_300X250} slotId="300x250-1" />
        <AdsterraBanner {...AD_320X50} slotId="320-1" />
      </div>

      <div className="w-full max-w-[496px] xl:w-auto flex flex-wrap xl:flex-nowrap items-center justify-center gap-2 shrink-0">
        {AD_160X600_LIST.map((ad) => (
          <div key={ad.slotId} className="w-[160px] shrink-0">
            <AdsterraBanner {...ad} />
          </div>
        ))}
      </div>
    </main>
  );
}

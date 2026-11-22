import { AdsterraBanner } from './components/AdsterraBanner';

const AD_728X90_TOP = {
  adKey: '484c207fa415194044d34f9cf2922bcb',
  width: 728,
  height: 90,
  scriptSrc: 'https://bicea.org/22/484c207fa415194044d34f9cf2922bcb',
};

const AD_728X90_BOTTOM = {
  adKey: '060218218c838023d66afcc65796c081',
  width: 728,
  height: 90,
  scriptSrc: 'https://bicea.org/22/060218218c838023d66afcc65796c081',
};

const AD_300X250_LIST = [
  {
    adKey: 'b74a8d52575ebfa67f8672835b8e5c9d',
    width: 300,
    height: 250,
    scriptSrc: 'https://bicea.org/22/b74a8d52575ebfa67f8672835b8e5c9d',
    slotId: '300x250-1',
  },
  {
    adKey: 'c65d268749fed519414382d5665bfc72',
    width: 300,
    height: 250,
    scriptSrc: 'https://bicea.org/22/c65d268749fed519414382d5665bfc72',
    slotId: '300x250-2',
  },
  {
    adKey: '2feaf291d3ced9e5f786663b07bc780b',
    width: 300,
    height: 250,
    scriptSrc: 'https://bicea.org/22/2feaf291d3ced9e5f786663b07bc780b',
    slotId: '300x250-3',
  },
];

const AD_320X50_LIST = [
  {
    adKey: 'ac5e7093aa12d7d70f1bad691ea22e69',
    width: 320,
    height: 50,
    scriptSrc: 'https://bicea.org/22/ac5e7093aa12d7d70f1bad691ea22e69',
    slotId: '320-1',
  },
  {
    adKey: '87015558b8405ac97733dd775ee646de',
    width: 320,
    height: 50,
    scriptSrc: 'https://bicea.org/22/87015558b8405ac97733dd775ee646de',
    slotId: '320-2',
  },
];

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
  {
    adKey: '15ee17c21b0b480ebb1724c010131604',
    width: 160,
    height: 600,
    scriptSrc: 'https://bicea.org/22/15ee17c21b0b480ebb1724c010131604',
    slotId: '160x600-4',
  },
  {
    adKey: 'b251e79ee4b2f92e9e5d16431f9620b8',
    width: 160,
    height: 600,
    scriptSrc: 'https://bicea.org/22/b251e79ee4b2f92e9e5d16431f9620b8',
    slotId: '160x600-5',
  },
];

export default function App() {
  return (
    <main className="w-full max-w-[960px] mx-auto flex flex-col items-center justify-start gap-3 overflow-x-hidden">
      <AdsterraBanner {...AD_728X90_TOP} slotId="728-1" />

      <div className="w-full flex flex-wrap items-center justify-center gap-2">
        {AD_300X250_LIST.map((ad) => (
          <div key={ad.slotId} className="w-[300px] shrink-0">
            <AdsterraBanner {...ad} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-2">
        {AD_320X50_LIST.map((ad) => (
          <div key={ad.slotId} className="w-[320px] shrink-0">
            <AdsterraBanner {...ad} />
          </div>
        ))}
      </div>

      <div className="w-full flex flex-wrap items-center justify-center gap-2">
        {AD_160X600_LIST.map((ad) => (
          <div key={ad.slotId} className="w-[160px] shrink-0">
            <AdsterraBanner {...ad} />
          </div>
        ))}
      </div>

      <AdsterraBanner {...AD_728X90_BOTTOM} slotId="728-2" />
    </main>
  );
}

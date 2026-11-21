import { useMemo, useState } from 'react';
import { ChevronRight, RotateCw, X } from 'lucide-react';
import { AdsterraBanner } from './components/AdsterraBanner';
import { CategoryFilter, FEED_ITEMS, FeedItem } from './data/articles';

const ADSTERRA_320X50 = {
  adKey: '1bafb35bac81bedbc74d9c04931916d7',
  width: 320,
  height: 50,
  scriptSrc: 'https://bicea.org/22/1bafb35bac81bedbc74d9c04931916d7',
};

const CATEGORIES: CategoryFilter[] = ['All', 'Tech', 'Deals', 'Guides'];

export default function App() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('All');
  const [selectedArticle, setSelectedArticle] = useState<FeedItem | null>(FEED_ITEMS[0]);
  const [cycleIndex, setCycleIndex] = useState(0);
  const [showStickyBar, setShowStickyBar] = useState(true);

  const filteredItems = useMemo(() => {
    const base =
      activeCategory === 'All'
        ? FEED_ITEMS
        : FEED_ITEMS.filter((item) => item.category === activeCategory);

    if (base.length <= 1) return base;
    const offset = cycleIndex % base.length;
    return [...base.slice(offset), ...base.slice(0, offset)];
  }, [activeCategory, cycleIndex]);

  const featuredItem = filteredItems[0] ?? FEED_ITEMS[0];
  const remainingItems = filteredItems.slice(1);

  const handleNavFilter = (category: CategoryFilter) => {
    setActiveCategory(category);
    const section = document.getElementById('feed');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleNextPicks = () => {
    const nextCycle = cycleIndex + 1;
    setCycleIndex(nextCycle);
    const pool =
      activeCategory === 'All'
        ? FEED_ITEMS
        : FEED_ITEMS.filter((item) => item.category === activeCategory);
    if (pool.length > 0) {
      setSelectedArticle(pool[nextCycle % pool.length]);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col">
      {/* Top Bar Contract: 3 clean zones separated by gap-8 */}
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between gap-8">
          <a
            href="#top"
            className="font-display text-lg font-bold tracking-tight text-slate-900 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-800 rounded"
          >
            PulseFeed Daily
          </a>

          <nav
            aria-label="Primary sections"
            className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600"
          >
            <button
              type="button"
              onClick={() => handleNavFilter('All')}
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Top Picks
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Tech')}
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Tech
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Deals')}
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Deals
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Guides')}
              className="hover:text-slate-900 hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0 cursor-pointer"
            >
              Guides
            </button>
          </nav>

          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={handleNextPicks}
              className="inline-flex items-center gap-2 px-4 py-2 text-xs font-medium text-white bg-blue-800 hover:bg-blue-900 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              <RotateCw className="w-3.5 h-3.5" aria-hidden="true" />
              <span>Next Picks</span>
            </button>
          </div>
        </div>
      </header>

      <main id="top" className="flex-1 w-full max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 pb-24">
        {/* Immediate Above-the-Fold Ad Slot (320x50) */}
        <section
          aria-label="Featured sponsored banner"
          className="mb-6 sm:mb-8 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-3 px-4"
        >
          <span className="text-[11px] font-medium text-slate-400 mb-1.5">
            Sponsored
          </span>
          <AdsterraBanner
            adKey={ADSTERRA_320X50.adKey}
            width={ADSTERRA_320X50.width}
            height={ADSTERRA_320X50.height}
            scriptSrc={ADSTERRA_320X50.scriptSrc}
            slotId={`top-${cycleIndex}`}
            title="Top 320x50 Banner"
          />
        </section>

        {/* Hero / Featured Highlight */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch mb-8">
          <div className="lg:col-span-7 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs text-slate-500 mb-3">
                <span>{featuredItem.category}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredItem.readTime}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredItem.updatedAt}</span>
              </div>
              <h1
                className="font-display font-bold tracking-tight text-slate-900 mb-4"
                style={{
                  fontSize: 'clamp(1.65rem, 3vw, 2.5rem)',
                  lineHeight: 1.15,
                  textWrap: 'balance',
                }}
              >
                {featuredItem.title}
              </h1>
              <p className="text-slate-600 text-base leading-relaxed max-w-2xl mb-6">
                {featuredItem.summary}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={() => setSelectedArticle(featuredItem)}
                className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Read Brief</span>
                <ChevronRight className="w-4 h-4" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={handleNextPicks}
                className="inline-flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors whitespace-nowrap shrink-0 cursor-pointer"
              >
                <span>Rotate Feed</span>
              </button>
            </div>
          </div>

          {/* Interactive Reader Brief Panel */}
          <aside className="lg:col-span-5 bg-white border border-slate-200 rounded-xl p-6 sm:p-8 flex flex-col justify-between">
            {selectedArticle ? (
              <div>
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <span>Selected Brief</span>
                    <span aria-hidden="true">·</span>
                    <span>{selectedArticle.category}</span>
                  </div>
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(null)}
                    aria-label="Close brief"
                    className="p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <h2 className="font-display text-xl font-bold text-slate-900 mb-3 leading-snug">
                  {selectedArticle.title}
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  {selectedArticle.detail}
                </p>
              </div>
            ) : (
              <div className="py-6">
                <h2 className="font-display text-lg font-semibold text-slate-900 mb-2">
                  Quick Reader Panel
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Select any card below to open its full summary right here without leaving the page.
                </p>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>Instant mobile &amp; desktop layout</span>
              <span className="tabular-nums">{filteredItems.length} items</span>
            </div>
          </aside>
        </section>

        {/* Mid-Page Banner Slot (320x50) */}
        <section
          aria-label="Mid-page sponsored banner"
          className="mb-8 flex flex-col items-center justify-center bg-white border border-slate-200 rounded-xl py-3 px-4"
        >
          <span className="text-[11px] font-medium text-slate-400 mb-1.5">
            Sponsored
          </span>
          <AdsterraBanner
            adKey={ADSTERRA_320X50.adKey}
            width={ADSTERRA_320X50.width}
            height={ADSTERRA_320X50.height}
            scriptSrc={ADSTERRA_320X50.scriptSrc}
            slotId={`mid-${cycleIndex}`}
            title="Mid-Page 320x50 Banner"
          />
        </section>

        {/* Category Filter Controls & Curated Feed */}
        <section id="feed" className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="font-display text-xl font-bold text-slate-900">
              Curated Highlights
            </h2>

            <div
              role="tablist"
              aria-label="Filter highlights by category"
              className="inline-flex items-center gap-1 p-1 bg-slate-200/70 rounded-lg self-start sm:self-auto"
            >
              {CATEGORIES.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => setActiveCategory(category)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 cursor-pointer ${
                      isActive
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {remainingItems.map((item) => {
              const isSelected = selectedArticle?.id === item.id;
              return (
                <article
                  key={item.id}
                  className={`bg-white border rounded-xl p-5 flex flex-col justify-between transition-colors ${
                    isSelected ? 'border-blue-800' : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5">
                      <span>{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.readTime}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.updatedAt}</span>
                    </div>
                    <h3 className="font-display text-base font-semibold text-slate-900 mb-2 leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.summary}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setSelectedArticle(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-800 hover:text-blue-900 self-start whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Open Summary</span>
                    <ChevronRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Quiet Footer */}
      <footer className="bg-white border-t border-slate-200 mt-auto pb-20 sm:pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>PulseFeed Daily · Fast Web Reader</span>
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => handleNavFilter('All')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Top Picks
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Tech')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Tech
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Deals')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Deals
            </button>
            <button
              type="button"
              onClick={() => handleNavFilter('Guides')}
              className="hover:text-slate-900 cursor-pointer"
            >
              Guides
            </button>
          </div>
        </div>
      </footer>

      {/* Compact Bottom Sticky 320x50 Banner (under 15% mobile viewport cap, dismissible) */}
      {showStickyBar && (
        <div
          role="region"
          aria-label="Sticky bottom banner"
          className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-sm border-t border-slate-200 py-1.5 px-3 flex items-center justify-center"
        >
          <AdsterraBanner
            adKey={ADSTERRA_320X50.adKey}
            width={ADSTERRA_320X50.width}
            height={ADSTERRA_320X50.height}
            scriptSrc={ADSTERRA_320X50.scriptSrc}
            slotId={`sticky-${cycleIndex}`}
            title="Bottom Sticky 320x50 Banner"
          />
          <button
            type="button"
            onClick={() => setShowStickyBar(false)}
            aria-label="Dismiss bottom banner"
            className="ml-2 p-1.5 text-slate-400 hover:text-slate-700 rounded-md hover:bg-slate-100 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}
    </div>
  );
}

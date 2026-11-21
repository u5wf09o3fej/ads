export type CategoryFilter = 'All' | 'Tech' | 'Deals' | 'Guides';

export interface FeedItem {
  id: string;
  title: string;
  summary: string;
  detail: string;
  category: Exclude<CategoryFilter, 'All'>;
  readTime: string;
  updatedAt: string;
}

export const FEED_ITEMS: FeedItem[] = [
  {
    id: 'mobile-speed-tips',
    title: '01. Lightweight Mobile Pages That Load Under One Second',
    summary:
      'Trimming blocking fonts, oversized scripts, and layout shifts keeps mobile visitors engaged from the first frame.',
    detail:
      'Mobile browsers spend most of their initial wait time parsing heavy third-party bundles and uncompressed assets. Keeping HTML shallow, reserving explicit pixel dimensions for banners, and deferring non-critical scripts prevents content jumping while boosting viewability on 3G and 4G connections.',
    category: 'Tech',
    readTime: '2 min read',
    updatedAt: 'Today',
  },
  {
    id: 'ad-viewability-guide',
    title: '02. Why Above-the-Fold Placement Outperforms Long Scrolls',
    summary:
      'Placements visible within the first viewport capture consistent impressions without forcing deep scrolling.',
    detail:
      'Advertisers evaluate placements by active viewability—whether at least half the creative remains on screen for one second or more. Compact headers paired with immediate above-the-fold slots deliver stronger CPM consistency than burying banners below multiple fold lines.',
    category: 'Guides',
    readTime: '3 min read',
    updatedAt: 'Today',
  },
  {
    id: 'budget-android-picks',
    title: '03. Top Compact Devices for Everyday Browsing & Streaming',
    summary:
      'Comparing battery endurance, 90Hz panels, and clean software on mid-range smartphones available this month.',
    detail:
      'Recent mid-tier phones pair 5,000mAh cells with power-efficient 6nm processors, giving over ten hours of active web browsing. Prioritize models with clean system updates and UFS storage for smoother multitasking.',
    category: 'Deals',
    readTime: '3 min read',
    updatedAt: 'Nov 2026',
  },
  {
    id: 'browser-cache-tricks',
    title: '04. Browser Caching & Fast DNS Settings for Snappier Loading',
    summary:
      'Simple network tweaks that cut DNS lookup latency and improve responsiveness on mobile data.',
    detail:
      'Switching to encrypted DNS resolvers such as Cloudflare 1.1.1.1 or Google 8.8.8.8 often shaves 40 to 100 milliseconds off initial domain handshakes, making feed-style websites open noticeably faster.',
    category: 'Tech',
    readTime: '2 min read',
    updatedAt: 'Nov 2026',
  },
  {
    id: 'responsive-layout-math',
    title: '05. Designing Clean Dual-Device Layouts Without Overlap',
    summary:
      'Matching 320px mobile slots and desktop containers using predictable breakpoints and zero horizontal overflow.',
    detail:
      'Fixed-width ad units require exact container reservations. Giving 320x50 slots clean centered framing on 360px phones while scaling the main content column up to 1120px on desktops keeps every element aligned without clipping.',
    category: 'Guides',
    readTime: '3 min read',
    updatedAt: 'Nov 2026',
  },
  {
    id: 'cloud-storage-offers',
    title: '06. Practical Free Cloud Backup Tiers Worth Checking',
    summary:
      'A quick breakdown of zero-cost photo, document, and link backup options across major platforms.',
    detail:
      'Combining automatic photo compression with selective folder sync lets you keep important receipts, backups, and media accessible across phone and laptop without paying for oversized storage tiers.',
    category: 'Deals',
    readTime: '2 min read',
    updatedAt: 'Nov 2026',
  },
];

import { useEffect, useMemo, useState } from 'react';
import {
  IconBalcony,
  IconBath,
  IconBathtub,
  IconBed,
  IconDeck,
  IconDining,
  IconDryer,
  IconEV,
  IconFirePit,
  IconGarden,
  IconHotTub,
  IconKitchen,
  IconMapPin,
  IconPet,
  IconPlay,
  IconPool,
  IconShower,
  IconToilet,
  IconWasher,
  IconWifi,
} from '@/components/icons';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Location', href: '/location' },
  { label: 'Photos', href: '/photos' },
  { label: 'Availability', href: '/availability' },
  { label: 'Reviews', href: '/reviews' },
];

const stats = [
  { label: 'Sleeps', value: '10' },
  { label: 'Bedrooms', value: '3 + kids room' },
  { label: 'Bathrooms', value: '2' },
  { label: 'Acreage', value: '11 wooded acres' },
];

const highlights = [
  {
    title: 'Indoor hot tub + exercise pool',
    description: 'Swim year-round with a spa-style soak and a dedicated wellness zone.',
  },
  {
    title: 'Rec room built for groups',
    description: 'Arcade, pool table, climbing wall, and movie-ready seating for everyone.',
  },
  {
    title: 'Fireside outdoor living',
    description: 'Covered patio, rockers, and a fire pit for long nights under the pines.',
  },
  {
    title: 'EV-ready and dog-friendly',
    description: 'ChargePoint Level 2 charger and a fenced yard for up to two dogs.',
  },
];

const sleepingArrangements = [
  {
    title: 'Bedroom 1',
    image: '/images/a9cd469addbc400d93a1b4e4863ac189-Large.jpg',
    alt: 'Primary bedroom with king bed',
    bedCount: 1,
    details: ['1 king bed', 'Primary suite', 'Private TV', 'Large closet'],
  },
  {
    title: 'Bedroom 2',
    image: '/images/ea79c684954f42579756dcf8bdaecbd9.jpg',
    alt: 'Second bedroom with multiple beds',
    bedCount: 4,
    details: ['2 twin beds', '1 double bed', '1 queen bed', 'Great for kids or groups'],
  },
  {
    title: 'Bedroom 3',
    image: '/images/a7e0c45cbf5b405c872432c2431ac27c.jpg',
    alt: 'Third bedroom with double and queen bed',
    bedCount: 2,
    details: ['1 double bed', '1 queen bed', 'Standalone bunkie house'],
  },
];

const gallery = [
  {
    src: '/images/781563ca1e494e84be126f622aba6859-Large.jpg',
    alt: 'Wooded exterior view of the retreat',
  },
  {
    src: '/images/59e00ff40bdc4694b4f4825fb7d8e730-Large.jpg',
    alt: 'Living room with plaid accents and cozy seating',
  },
  {
    src: '/images/f78ac072797546e4a8a505414922439f-Large.jpg',
    alt: 'Kitchen with warm wood finishes',
  },
  {
    src: '/images/a9cd469addbc400d93a1b4e4863ac189-Large.jpg',
    alt: 'Main bedroom with soft bedding',
  },
  {
    src: '/images/e74c373decb643a78f64510fdf87e50a-Large.jpg',
    alt: 'Spa bathroom with soaking tub',
  },
  {
    src: '/images/fa42bb7cfd654f3e952536b9968e096d-Large.jpg',
    alt: 'Rec room with games and seating',
  },
  {
    src: '/images/9203a11b00be40dfbecafd3d5c97055d-Large.jpg',
    alt: 'Outdoor fire pit area',
  },
  {
    src: '/images/efaa27226f0348d8b49da438f809e10d-Large.jpg',
    alt: 'Wooded balcony with swing chairs',
  },
];

const popularAmenities = [
  { title: 'Indoor pool', icon: IconPool },
  { title: 'Hot tub', icon: IconHotTub },
  { title: 'Kitchen', icon: IconKitchen },
  { title: 'Washer', icon: IconWasher },
  { title: 'Dryer', icon: IconDryer },
  { title: 'Pet-friendly', icon: IconPet },
  { title: 'Fire pit', icon: IconFirePit },
  { title: 'High-speed WiFi', icon: IconWifi },
  { title: 'EV charger', icon: IconEV },
];

const spaceHighlights = [
  { title: 'Deck / patio', icon: IconDeck },
  { title: 'Balcony', icon: IconBalcony },
  { title: 'Kitchen', icon: IconKitchen },
  { title: 'Dining area', icon: IconDining },
  { title: 'Outdoor play area', icon: IconPlay },
  { title: 'Garden', icon: IconGarden },
];

const bathrooms = [
  {
    title: 'Downstairs bathroom',
    icon: IconBath,
    features: [
      { label: 'Toilet', icon: IconToilet },
      { label: 'Shower only', icon: IconShower },
    ],
  },
  {
    title: 'Upstairs bathroom',
    icon: IconBath,
    features: [
      { label: 'Bathtub', icon: IconBathtub },
      { label: 'Toilet', icon: IconToilet },
      { label: 'Shower only', icon: IconShower },
    ],
  },
];

const policies = [
  'Check-in after 4:00 PM',
  'Check-out before 11:00 AM',
  'Minimum age to book: 25',
  'Children allowed (ages 0–17)',
  'Pets allowed: dogs (limit 2 total)',
  'No parties or events',
  'Smoking is not permitted',
  'Quiet hours: 9pm–9am (decibel sensors on site)',
  'No trespassing on neighboring properties',
  'No hidden fees (cleaning included)',
];

const seasonalExperiences = [
  {
    title: 'Winter ski weekends',
    subtitle: 'Nubs Nob + Boyne Highlands are minutes away.',
    bullets: ['Boot warmers ready', 'Hot tub recovery nights', 'Fireplace + cocoa bar'],
  },
  {
    title: 'Summer lake days',
    subtitle: 'Beaches, wineries, and sunsets on Lake Michigan.',
    bullets: ['Beach day pack list', 'Evening fire pit hangs', 'Balcony coffee sunrise'],
  },
];

const nearby = [
  { label: 'Downtown Petoskey', time: '16 min' },
  { label: 'Harbor Springs', time: '24 min' },
  { label: 'Lake Michigan Beaches', time: '20 min' },
  { label: 'Nubs Nob Ski Resort', time: '24 min' },
  { label: 'Boyne Highlands', time: '24 min' },
  { label: 'Tunnel of Trees scenic drive', time: '34 min' },
  { label: 'Wineries + Breweries', time: '12–21 min' },
];

const exploreArea = [
  { label: 'Pickerel Lake', time: '8 min drive' },
  { label: 'Crooked Lake', time: '10 min drive' },
  { label: 'McLaren Northern Michigan Hospital', time: '18 min drive' },
  { label: 'Pellston Regional Airport (PLN)', time: '37 min drive' },
];

const faqs = [
  {
    question: 'Is the retreat family-friendly?',
    answer:
      'Yes. The bonus kids room, bunkie house, and rec room are designed for families who want space to spread out and play.',
  },
  {
    question: 'Are dogs allowed?',
    answer:
      'Up to two dogs are welcome with a $50 per pet fee. The fenced yard and water bowls are ready when you arrive.',
  },
  {
    question: 'What is the winter access like?',
    answer:
      'The driveway is steep and snow accumulates quickly. AWD/4WD is strongly recommended in winter months.',
  },
  {
    question: 'How do we check availability?',
    answer:
      'Use the Book Now button to view real-time availability and pricing on the booking page.',
  },
];

const reviews = [
  {
    name: 'Jenny N',
    stay: 'Jan 2026',
    rating: 5.0,
    quote:
      'What an awesome stay at Birch and Bark! The coziest and well-appointed cabin. It was the perfect place for our family ski weekend. We would love to return in the future!',
    response: 'Thanks Jenny! It was so wonderful having you up!',
  },
  {
    name: 'Amber S',
    stay: 'Jan 2026',
    rating: 5.0,
    quote:
      'This place was amazing! Everything we wanted for a getaway and more! Was so cozy we didn’t even want to leave the house. My kids loved the basement and so did the adults! The cutest decor, most comfortable couch and beds and everything you need. Thank you again for sharing your wonderful home! We hope to be back!',
    response: 'Thanks so much, Amber! Love hearing your family had such a great time!',
  },
  {
    name: 'Dawn E',
    stay: 'Dec 2025',
    rating: 5.0,
    quote: 'Great home for families. Everything you need is there. I will be booking again!',
    response: 'Thanks Dawn and we look forward to having you up again!',
  },
];

const reviewSummary = {
  count: 27,
  highlight: '10/10',
};

const originQuery = 'Birch & Bark Retreat, Petoskey, MI';

const buildDirectionsUrl = (destination: string) => {
  const params = new URLSearchParams({
    origin: originQuery,
    destination,
    travelmode: 'driving',
  });
  return `https://www.google.com/maps/dir/?${params.toString()}`;
};

const locationGroups = [
  {
    title: 'Parks & Trails',
    items: [
      { label: 'Petoskey State Park', time: '16 min' },
      { label: 'Allan and Virginia McCune Nature Preserve', time: '7 min' },
      { label: 'Little Traverse Wheelway', time: '15 min' },
      { label: 'Bear River Valley Recreation Area', time: '18 min' },
      { label: 'Tanton Family Working Forest Reserve', time: '7 min' },
      { label: 'Skyline Trailhead North & North Country Trail', time: '17 min' },
      { label: 'Oden Island Nature Preserve', time: '16 min' },
      { label: 'Bay View Woods Hiking Trails', time: '18 min' },
      { label: 'Fochtman Nature Preserve', time: '15 min' },
      { label: 'Seven Springs Nature Preserve', time: '20 min' },
      { label: 'The Tunnel of Trees', time: '34 min' },
    ],
  },
  {
    title: 'Ski Resorts',
    items: [
      { label: 'Nubs Nob Ski Resort', time: '24 min' },
      { label: 'Boyne Highlands', time: '24 min' },
      { label: 'Boyne Mountain Resort', time: '34 min' },
    ],
  },
  {
    title: 'Wineries',
    items: [
      { label: 'Maple Moon Sugarbush and Winery', time: '12 min' },
      { label: 'Petoskey Farms Vineyard, Winery, Coffeehouse', time: '13 min' },
      { label: 'Farmhouse Vineyards', time: '15 min' },
      { label: 'Crooked Vine Vineyard & Winery', time: '16 min' },
      { label: 'Seasons of the North Winery', time: '13 min' },
      { label: 'Gabriel Farms & Winery / Four Labs Beer & Cider', time: '12 min' },
      { label: 'Happy Days and Nights Winery', time: '21 min' },
      { label: 'Boyne Valley Vineyards', time: '23 min' },
    ],
  },
  {
    title: 'Breweries',
    items: [
      { label: 'Petoskey Brewing Company', time: '15 min' },
      { label: 'Burt Lake Brewing', time: '13 min' },
      { label: 'Northland Brewing Co', time: '17 min' },
      { label: 'Elder Piper Beer + Cider', time: '18 min' },
      { label: 'Beards Brewery', time: '17 min' },
    ],
  },
  {
    title: 'Golf Courses',
    items: [
      { label: 'Petoskey Golf Center (indoor golf)', time: '14 min' },
      { label: 'Petoskey - Bay View Country Club', time: '14 min' },
      { label: 'Walloon Lake Country Club', time: '24 min' },
      { label: 'Indian River Golf Club', time: '19 min' },
      { label: 'Wildwood Lakes Golf Course', time: '24 min' },
      { label: 'Wequetonsing Golf Club', time: '24 min' },
      { label: 'Harbor Point Golf Club', time: '26 min' },
    ],
  },
  {
    title: 'Downtown Areas',
    items: [
      { label: 'Downtown Petoskey', time: '16 min' },
      { label: 'Downtown Harbor Springs', time: '24 min' },
      { label: 'Downtown Gaylord', time: '36 min' },
      { label: 'Downtown Charlevoix', time: '37 min' },
    ],
  },
];

const propertyId = '54ec4ac58c9e46819568b6c64bc2898c';

const ownerRezWidgets = {
  availability: {
    type: 'Multiple Month Calendar',
    id: '6d4b5d4d84bb48b6a12368156e3012ab',
  },
  reviews: {
    type: 'Reviews',
    id: 'a8166e41c5614e0080fe603ec271ed70',
  },
  booking: {
    type: 'Booking/Inquiry',
    id: '0137563f91af4bdaadf39e72d8965c04',
  },
} as const;

function OwnerRezWidget({ widgetType, widgetId }: { widgetType: string; widgetId: string }) {
  useEffect(() => {
    if (document.querySelector('script[data-ownerrez-widget]')) return;
    const script = document.createElement('script');
    script.src = 'https://app.ownerrez.com/widget.js';
    script.async = true;
    script.dataset.ownerrezWidget = 'true';
    document.body.appendChild(script);
  }, []);

  return (
    <div
      className="ownerrez-widget"
      data-propertyId={propertyId}
      data-widget-type={widgetType}
      data-widgetId={widgetId}
    />
  );
}

function PageHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mx-auto w-full max-w-6xl px-6 pb-10 pt-6">
      <div className="space-y-4">
        <Badge variant="accent">Birch & Bark Retreat</Badge>
        <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">{title}</h1>
        {subtitle && <p className="max-w-2xl text-lg text-pine-700">{subtitle}</p>}
      </div>
    </div>
  );
}

function BookingPanel({ compact = false }: { compact?: boolean }) {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState('4');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const params = new URLSearchParams();
    if (checkIn) params.set('checkin', checkIn);
    if (checkOut) params.set('checkout', checkOut);
    if (guests) params.set('guests', guests);
    window.location.href = `/book${params.toString() ? `?${params.toString()}` : ''}`;
  };

  return (
    <Card className={compact ? 'bg-sand-100/90' : ''}>
      <CardContent className={compact ? 'p-4' : 'pt-6'}>
        <form onSubmit={handleSubmit} className="grid gap-3 sm:grid-cols-3">
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-pine-500">
            Check in
            <input
              type="date"
              value={checkIn}
              onChange={(event) => setCheckIn(event.target.value)}
              className="rounded-2xl border border-sand-200/80 bg-sand-50 px-3 py-2 text-sm font-semibold text-pine-800"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-pine-500">
            Check out
            <input
              type="date"
              value={checkOut}
              onChange={(event) => setCheckOut(event.target.value)}
              className="rounded-2xl border border-sand-200/80 bg-sand-50 px-3 py-2 text-sm font-semibold text-pine-800"
            />
          </label>
          <label className="flex flex-col gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-pine-500">
            Guests
            <select
              value={guests}
              onChange={(event) => setGuests(event.target.value)}
              className="rounded-2xl border border-sand-200/80 bg-sand-50 px-3 py-2 text-sm font-semibold text-pine-800"
            >
              {['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((count) => (
                <option key={count} value={count}>
                  {count} guests
                </option>
              ))}
            </select>
          </label>
          <div className="sm:col-span-3">
            <Button size={compact ? 'default' : 'lg'} className="w-full" type="submit">
              Check availability
            </Button>
            {!compact && (
              <p className="mt-2 text-xs text-pine-600">
                Instant booking or inquiry. You will always see live pricing before confirming.
              </p>
            )}
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

function DirectionsList({
  items,
}: {
  items: { label: string; time: string; destination?: string }[];
}) {
  return (
    <div className="space-y-2">
      {items.map((item) => {
        const href = buildDirectionsUrl(item.destination ?? item.label);
        return (
          <a
            key={`${item.label}-${item.time}`}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="group flex items-center justify-between rounded-2xl border border-sand-200/70 bg-sand-100/80 px-4 py-2 text-sm text-pine-700 transition hover:border-ember-500/40 hover:bg-sand-50"
          >
            <span className="flex items-center gap-3 font-semibold text-pine-800 group-hover:text-pine-900">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sand-50 text-ember-600">
                <IconMapPin className="h-4 w-4" aria-hidden="true" />
              </span>
              {item.label}
            </span>
            <span className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-pine-500">
              {item.time}
              <span className="text-ember-600">→</span>
            </span>
          </a>
        );
      })}
    </div>
  );
}

function GalleryGrid({
  images,
  columns = 'lg:grid-cols-4',
}: {
  images: typeof gallery;
  columns?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = () => setActiveIndex(null);
  const showPrev = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev - 1 + images.length) % images.length));
  const showNext = () =>
    setActiveIndex((prev) => (prev === null ? null : (prev + 1) % images.length));

  const activeImage = activeIndex === null ? null : images[activeIndex];

  return (
    <>
      <div className={`grid gap-4 sm:grid-cols-2 ${columns}`}>
        {images.map((image, index) => (
          <button
            type="button"
            key={image.src}
            className="group relative overflow-hidden rounded-3xl border border-sand-200/70 bg-sand-100/80 shadow-lg"
            onClick={() => setActiveIndex(index)}
            aria-label={`Open photo: ${image.alt}`}
          >
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className="h-52 w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </button>
        ))}
      </div>

      {activeImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-pine-900/80 p-6">
          <button
            type="button"
            className="absolute right-6 top-6 rounded-full bg-sand-50/90 px-4 py-2 text-sm font-semibold text-pine-900"
            onClick={close}
          >
            Close
          </button>
          <button
            type="button"
            className="absolute left-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-sand-50/90 px-3 py-2 text-lg font-semibold text-pine-900 md:inline-flex"
            onClick={showPrev}
          >
            ‹
          </button>
          <img
            src={activeImage.src}
            alt={activeImage.alt}
            className="max-h-[80vh] w-full max-w-4xl rounded-3xl object-cover shadow-2xl"
          />
          <button
            type="button"
            className="absolute right-6 top-1/2 hidden -translate-y-1/2 rounded-full bg-sand-50/90 px-3 py-2 text-lg font-semibold text-pine-900 md:inline-flex"
            onClick={showNext}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
}

function StickyBookingBar({ visible }: { visible: boolean }) {
  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-40 w-[calc(100%-2rem)] -translate-x-1/2 md:w-[720px]">
      <Card className="bg-sand-50/95 shadow-2xl">
        <CardContent className="flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pine-500">
              Ready to book?
            </p>
            <p className="text-sm text-pine-700">
              Check dates instantly or call for a custom stay.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button size="sm" asChild>
              <a href="/book">Check availability</a>
            </Button>
            <Button size="sm" variant="outline" asChild>
              <a href="tel:+15189291422">Call host</a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function HomePage() {
  return (
    <>
      <section id="overview" className="relative pb-16 pt-14">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-8">
            <Badge variant="accent">A true escape in Northern Michigan</Badge>
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pine-600">
                11 acres · Petoskey · Harbor Springs
              </p>
              <h1 className="text-4xl font-semibold leading-tight text-shadow-soft sm:text-5xl lg:text-6xl">
                <span className="block">Woodland Luxury.</span>
                <span className="block">Indoor Spa.</span>
                <span className="block">Room for Everyone.</span>
              </h1>
              <p className="text-lg text-pine-700">
                Tucked into breathtaking woods, Birch & Bark Retreat is a 3,000 sq ft getaway
                crafted for families and groups. Think fireside nights, a year-round indoor hot tub
                pool, a cinematic rec room, and serene mornings just minutes from Lake Michigan.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" asChild>
                <a href="/book">Check Availability</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+15189291422">Call (518) 929-1422</a>
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-4 text-sm text-pine-600 sm:gap-6">
              <span>Family-ready · Dog-friendly · EV charging</span>
              <Separator orientation="vertical" className="hidden h-6 sm:block" />
              <span>Minutes from Petoskey + Harbor Springs</span>
            </div>
          </div>
          <div className="space-y-6">
            <div className="relative">
              <div className="absolute -top-6 left-6 z-10 hidden rounded-2xl bg-sand-100/95 px-5 py-3 text-xs uppercase tracking-[0.3em] text-pine-700 shadow-lg md:block">
                Indoor spa + rec room
              </div>
              <div className="overflow-hidden rounded-[28px] shadow-lift ring-1 ring-pine-900/10">
                <video
                  className="h-full w-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster="/images/fa42bb7cfd654f3e952536b9968e096d-Large.jpg"
                >
                  <source src="/living-room.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden rounded-3xl border border-sand-200/80 bg-sand-100/80 shadow-lg">
                <img
                  src="/images/59e00ff40bdc4694b4f4825fb7d8e730-Large.jpg"
                  alt="Cozy living room"
                  className="h-40 w-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-3xl border border-sand-200/80 bg-sand-100/80 shadow-lg">
                <img
                  src="/images/781563ca1e494e84be126f622aba6859-Large.jpg"
                  alt="Wooded exterior"
                  className="h-40 w-full object-cover"
                />
              </div>
            </div>
            <BookingPanel />
          </div>
        </div>
        <div className="mx-auto mt-14 grid w-full max-w-6xl gap-4 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <Card key={stat.label}>
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-pine-900">{stat.value}</CardTitle>
                <CardDescription className="text-xs uppercase tracking-[0.25em] text-pine-500">
                  {stat.label}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
        <div className="mx-auto mt-6 w-full max-w-6xl px-6">
          <Card>
            <CardContent className="flex flex-col gap-4 py-6 md:flex-row md:items-center md:justify-between">
              <div className="space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pine-500">
                  Guests love it
                </p>
                <div className="flex flex-wrap items-center gap-3 text-pine-800">
                  <span className="text-2xl">⭐️⭐️⭐️⭐️⭐️</span>
                  <span className="text-sm uppercase tracking-[0.3em] text-ember-600">
                    {reviewSummary.highlight}
                  </span>
                  <span className="text-sm text-pine-600">
                    {reviewSummary.count} verified reviews
                  </span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 text-sm text-pine-600">
                <span className="rounded-full border border-sand-200/70 bg-sand-50 px-4 py-2">
                  Family-ready
                </span>
                <span className="rounded-full border border-sand-200/70 bg-sand-50 px-4 py-2">
                  Dog-friendly
                </span>
                <span className="rounded-full border border-sand-200/70 bg-sand-50 px-4 py-2">
                  EV charging
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="amenities" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <Badge variant="forest">Stay highlights</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Every detail designed for long, slow weekends.
              </h2>
              <p className="text-lg text-pine-700">
                From sunrise coffees on the balcony to evenings in the rec room, the retreat is
                curated for comfort and adventure. Bring your people, your pets, and your curiosity.
              </p>
              <Button variant="outline" asChild>
                <a href="/photos">View full photo set</a>
              </Button>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item) => (
                <Card key={item.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription>{item.description}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pine-500">
              Popular amenities
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {popularAmenities.map((amenity) => {
                const Icon = amenity.icon;
                return (
                  <Card key={amenity.title}>
                    <CardContent className="flex items-center gap-4 pt-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-50 text-ember-600">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="font-semibold text-pine-800">{amenity.title}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="spaces" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="space-y-4">
              <Badge>Spaces & sleep</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">Rooms built for rest.</h2>
            </div>
            <p className="max-w-xl text-lg text-pine-700">
              Three distinct sleeping zones plus a kids room make it easy to gather together and
              still find quiet corners for sleep.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {sleepingArrangements.map((room) => (
              <Card key={room.title}>
                <div className="overflow-hidden rounded-3xl border-b border-sand-200/70">
                  <img
                    src={room.image}
                    alt={room.alt}
                    className="h-40 w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <CardTitle>{room.title}</CardTitle>
                    <div className="flex items-center gap-1 text-ember-600">
                      {Array.from({ length: room.bedCount }, (_, index) => index + 1).map(
                        (value) => (
                          <IconBed key={value} className="h-4 w-4" aria-hidden="true" />
                        )
                      )}
                    </div>
                  </div>
                  <CardDescription>
                    {room.details.map((detail) => (
                      <span key={detail} className="block">
                        {detail}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {bathrooms.map((bath) => (
              <Card key={bath.title}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-sand-50 text-ember-600">
                      <bath.icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <CardTitle>{bath.title}</CardTitle>
                  </div>
                  <CardDescription className="space-y-2">
                    {bath.features.map((feature) => (
                      <span key={feature.label} className="flex items-center gap-2">
                        <feature.icon className="h-4 w-4 text-ember-600" aria-hidden="true" />
                        {feature.label}
                      </span>
                    ))}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
          <div className="mt-10">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-pine-500">
              Spaces to enjoy
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {spaceHighlights.map((space) => {
                const Icon = space.icon;
                return (
                  <Card key={space.title}>
                    <CardContent className="flex items-center gap-4 pt-6">
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sand-50 text-ember-600">
                        <Icon className="h-6 w-6" aria-hidden="true" />
                      </span>
                      <span className="font-semibold text-pine-800">{space.title}</span>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Badge variant="accent">Gallery</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">A peek into the retreat.</h2>
            </div>
            <Button variant="ghost" asChild>
              <a href="/photos">Explore the full gallery</a>
            </Button>
          </div>
          <div className="mt-10">
            <GalleryGrid images={gallery} />
          </div>
        </div>
      </section>

      <section id="testimonials" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Badge variant="accent">Guest reviews</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">Five-star stays, every time.</h2>
              <p className="max-w-2xl text-lg text-pine-700">
                Verified guest feedback from recent stays in 2025–2026.
              </p>
            </div>
            <Button variant="ghost" asChild>
              <a href="/reviews">View all reviews</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {reviews.map((review) => (
              <Card key={`${review.name}-${review.stay}-${review.quote.slice(0, 12)}`}>
                <CardHeader>
                  <div className="flex items-center justify-between text-sm text-pine-600">
                    <span className="font-semibold text-pine-900">{review.name}</span>
                    <span>{review.stay}</span>
                  </div>
                  <div className="flex items-center gap-2 text-ember-600">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].slice(0, Math.round(review.rating)).map((value) => (
                        <span key={value} aria-hidden="true">
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-[0.25em] text-pine-500">
                      {review.rating.toFixed(1)} stars
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4 text-pine-700">
                  <p>{review.quote}</p>
                  {review.response && (
                    <div className="rounded-2xl border border-sand-200/70 bg-sand-50/80 p-4 text-sm">
                      <p className="font-semibold text-pine-800">Response from Jason Valentini</p>
                      <p className="text-pine-600">{review.response}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="location" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Badge>Location</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Minutes from Petoskey, Harbor Springs, and Lake Michigan.
              </h2>
              <p className="text-lg text-pine-700">
                You are close to beaches, golf courses, wineries, and ski resorts, yet tucked away
                in a peaceful pocket of 11 private acres. The best of Northern Michigan is at your
                doorstep.
              </p>
              <Button variant="outline" asChild>
                <a href="/location">See full attractions list</a>
              </Button>
            </div>
            <div className="space-y-4">
              <DirectionsList items={nearby} />
            </div>
          </div>
        </div>
      </section>

      <section id="seasonal" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="space-y-3">
              <Badge variant="accent">Seasonal stays</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">
                Tailored for ski weekends and lake days.
              </h2>
            </div>
            <Button variant="ghost" asChild>
              <a href="/book">Plan your stay</a>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {seasonalExperiences.map((season) => (
              <Card key={season.title}>
                <CardHeader>
                  <CardTitle className="text-xl">{season.title}</CardTitle>
                  <CardDescription>{season.subtitle}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2 text-pine-700">
                  {season.bullets.map((bullet) => (
                    <p key={bullet} className="flex items-center gap-2">
                      <span className="text-ember-600">●</span>
                      {bullet}
                    </p>
                  ))}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-6">
              <Badge variant="forest">FAQs</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">Quick answers before you book.</h2>
              <p className="text-lg text-pine-700">
                We keep everything simple and transparent. If you need a custom stay or have
                questions, reach out and we will respond quickly.
              </p>
              <Button asChild>
                <a href="mailto:birchandbarkretreat@gmail.com">Email the host</a>
              </Button>
            </div>
            <Card>
              <CardContent className="pt-6">
                <Accordion type="single" collapsible>
                  {faqs.map((faq) => (
                    <AccordionItem key={faq.question} value={faq.question}>
                      <AccordionTrigger>{faq.question}</AccordionTrigger>
                      <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="policies" className="pb-16">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <Badge>House policies</Badge>
              <h2 className="text-3xl font-semibold sm:text-4xl">Simple, respectful guidelines.</h2>
              <p className="text-lg text-pine-700">
                We keep the retreat peaceful for neighbors and easy for guests. Please review the
                key policies before confirming your stay.
              </p>
            </div>
            <Card>
              <CardContent className="pt-6">
                <div className="grid gap-3 text-sm text-pine-700">
                  {policies.map((policy) => (
                    <div key={policy} className="flex items-start gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-ember-500" />
                      <span>{policy}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}

function PhotosPage() {
  return (
    <>
      <PageHeader
        title="Photos"
        subtitle="Browse the spaces that make Birch & Bark a true four-season escape."
      />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <GalleryGrid images={gallery} columns="lg:grid-cols-3" />
        </div>
      </section>
    </>
  );
}

function AvailabilityPage() {
  return (
    <>
      <PageHeader
        title="Availability"
        subtitle="Check real-time openings for your preferred dates, then head to booking when you are ready."
      />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Card>
            <CardContent className="pt-6">
              <OwnerRezWidget
                widgetType={ownerRezWidgets.availability.type}
                widgetId={ownerRezWidgets.availability.id}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Reviews"
        subtitle="See what past guests loved most about their stay at Birch & Bark Retreat."
      />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Card>
            <CardContent className="pt-6">
              <OwnerRezWidget
                widgetType={ownerRezWidgets.reviews.type}
                widgetId={ownerRezWidgets.reviews.id}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function BookPage() {
  return (
    <>
      <PageHeader
        title="Book Now"
        subtitle="Reserve your dates or send a quick inquiry for special requests."
      />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <Card>
            <CardContent className="pt-6">
              <OwnerRezWidget
                widgetType={ownerRezWidgets.booking.type}
                widgetId={ownerRezWidgets.booking.id}
              />
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function LocationPage() {
  return (
    <>
      <PageHeader
        title="Location & Nearby Attractions"
        subtitle="Beaches, wineries, ski slopes, and charming downtowns are a short drive away."
      />
      <section className="pb-20">
        <div className="mx-auto w-full max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Petoskey, Michigan</CardTitle>
                  <CardDescription>
                    Enjoy Lake Michigan beaches, boutique shopping, and local dining within minutes
                    of the retreat.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <iframe
                    title="Petoskey Map"
                    className="h-64 w-full rounded-2xl border border-sand-200/70"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://www.google.com/maps?q=Petoskey%2C%20MI&output=embed"
                  />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Quick drives</CardTitle>
                  <CardDescription>
                    Easy access to lakes, the airport, and local care.
                  </CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <DirectionsList items={exploreArea} />
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Seasonal Notes</CardTitle>
                  <CardDescription>
                    Winter stays are magical, but AWD/4WD is recommended due to the steep driveway
                    and snowfall.
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
            <div className="space-y-6">
              {locationGroups.map((group) => (
                <Card key={group.title}>
                  <CardHeader>
                    <CardTitle className="text-lg">{group.title}</CardTitle>
                    <CardDescription>Tap for directions.</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <DirectionsList items={group.items} />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CallToAction() {
  return (
    <section className="pb-20">
      <div className="mx-auto w-full max-w-6xl px-6">
        <Card className="bg-pine-900 text-sand-50">
          <CardContent className="flex flex-col items-start gap-6 p-10 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sand-200">
                Ready to retreat?
              </p>
              <h3 className="mt-3 text-3xl font-semibold">Reserve your dates today.</h3>
              <p className="mt-2 text-sand-200">
                Book instantly or send a quick note for custom requests.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-sand-50 text-pine-900 hover:bg-sand-200">
                <a href="/book">Book Now</a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-sand-50 text-sand-50 hover:bg-sand-50 hover:text-pine-900"
                asChild
              >
                <a href="tel:+15189291422">Call Host</a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}

function getPage(pathname: string) {
  if (pathname === '/photos') return <PhotosPage />;
  if (pathname === '/availability') return <AvailabilityPage />;
  if (pathname === '/reviews') return <ReviewsPage />;
  if (pathname === '/book') return <BookPage />;
  if (pathname === '/location') return <LocationPage />;
  return <HomePage />;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showSticky, setShowSticky] = useState(false);
  const pathname = useMemo(() => window.location.pathname, []);

  useEffect(() => {
    if (pathname === '/book') {
      setShowSticky(false);
      return;
    }

    const handleScroll = () => {
      setShowSticky(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  return (
    <div className="relative overflow-hidden bg-hero-mist">
      <div className="pointer-events-none absolute inset-0 noise opacity-[0.35] mix-blend-soft-light" />
      <div className="pointer-events-none absolute -left-32 top-16 h-72 w-72 rounded-full bg-forest-glow blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-80 w-80 rounded-full bg-ember-500/15 blur-[140px]" />

      <header className="sticky top-0 z-40 border-b border-sand-200/70 bg-sand-50/90 backdrop-blur-lg">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:gap-6 sm:px-6 sm:py-5">
          <div className="space-y-1">
            <a href="/" className="block">
              <p className="font-display text-lg uppercase tracking-[0.35em] text-pine-700">
                Birch & Bark
              </p>
              <p className="text-xs font-semibold text-pine-600">Petoskey, Michigan</p>
            </a>
          </div>
          <nav className="hidden items-center gap-6 text-xs font-semibold uppercase tracking-[0.25em] text-pine-700 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={pathname === item.href ? 'text-ember-600' : 'hover:text-ember-600'}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild size="lg" className="hidden sm:inline-flex">
              <a href="/book">Book Now</a>
            </Button>
            <Button asChild size="sm" className="sm:hidden">
              <a href="/book">Book</a>
            </Button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="rounded-lg p-2 text-pine-700 hover:bg-sand-200/70 lg:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
        {mobileMenuOpen && (
          <div className="border-t border-sand-200/70 bg-sand-50/95 px-4 py-4 lg:hidden">
            <nav className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-lg px-3 py-2 text-sm font-semibold uppercase tracking-[0.2em] text-pine-700 hover:bg-sand-200/70"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <main>
        {getPage(pathname)}
        <CallToAction />
      </main>

      <StickyBookingBar visible={showSticky} />

      <footer className="border-t border-sand-200/70 bg-sand-50/90">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-pine-600 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-semibold text-pine-700">Birch & Bark Retreat</p>
            <p>Petoskey, Michigan</p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a href="tel:+15189291422" className="hover:text-ember-600">
              (518) 929-1422
            </a>
            <a href="mailto:birchandbarkretreat@gmail.com" className="hover:text-ember-600">
              birchandbarkretreat@gmail.com
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

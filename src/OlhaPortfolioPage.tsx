import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Video, ChevronRight, Star, Image as ImageIcon, Users, BarChart2, ArrowRight, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Helper function to get correct path for GitHub Pages
const getAssetPath = (path: string): string => {
  // Get base URL from Vite env (automatically set by vite.config.ts)
  // For dev: '/', for production build: '/Portfolio/'
  const baseUrl = (import.meta as any).env?.BASE_URL || '/';
  // Ensure base URL ends with /
  const normalizedBase = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`;
  // Remove leading slash from path if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  // Return combined path
  return `${normalizedBase}${cleanPath}`;
};

const HERO_IMAGE = getAssetPath("/portfolio/Vitalik/N1.jpg");

const PORTFOLIO_IMAGES: { src: string; alt: string }[] = [

  { src: getAssetPath('/portfolio/content photo examples/7.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/17.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/31.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/46.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/47.jpg'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Chez%20Mia%20_%20Interior%20shoot-073.jpg'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Chez%20Mia-055.jpg'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/CHEZMIA_9-20-25_FOUREYED_D_-85.jpg'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/21.png'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/22.png'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/23.png'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/24.png'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/25.png'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Tezza-2728.jpg'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Tezza-3250.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Tezza-3885.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Tezza-7951.JPG'), alt: 'Portfolio' },
  { src: getAssetPath('/portfolio/content photo examples/Tezza-9940.jpg'), alt: 'Portfolio' },  
];

const CLIENT_LOGOS: { src: string; alt: string }[] = [];

// Image marquee for Client Highlights
const CLIENT_HIGHLIGHT_IMAGES: { src: string; alt: string }[] = [
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/Untitled%20design-2.png'), alt: 'Client Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/Official%20Logo.png'), alt: 'Client Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/IMG_1041-removebg-preview.png'), alt: 'Client Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/IMG_0392-removebg-preview.png'), alt: 'Client Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/Group%204.PNG'), alt: 'Client Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/ChezMia_Wordmark_Blue.png'), alt: 'Chez Mia Wordmark' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/BBN_BF_LOGO_30x30.png'), alt: 'BBN Logo' },
];

const container = {
  hidden: { opacity: 0, y: 8 },
  show: { opacity: 1, y: 0, transition: { staggerChildren: 0.05 } },
};
const item = { hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } };

function SectionTitle({ eyebrow, title, subtitle, titleClassName, style }: { eyebrow?: string; title: string | React.ReactNode; subtitle?: string; titleClassName?: string; style?: React.CSSProperties }) {
  return (
    <div className="mx-auto mb-8 max-w-3xl text-center">
      {eyebrow && <div className="mb-2 text-xs uppercase tracking-widest text-zinc-500">{eyebrow}</div>}
      <h2 className={`text-3xl font-semibold leading-tight md:text-4xl ${titleClassName || ''}`} style={style}>{title}</h2>
      {subtitle && <p className="mt-3 text-zinc-600">{subtitle}</p>}
    </div>
  );
}

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Блокуємо прокрутку при відкритому меню
  React.useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#client-highlights', label: 'My Clients' },
    { href: '#about', label: 'About' },
    { href: '#services', label: 'Services' },
    { href: '#portfolio', label: 'Portfolio' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/70 backdrop-blur-md supports-[backdrop-filter]:bg-white/55">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 md:py-3">
        <a href="#top" className="font-semibold tracking-tight text-sm md:text-base" onClick={closeMenu}>Welcome</a>
        
        {/* Desktop Navigation */}
        <nav className="hidden gap-4 md:gap-6 text-xs md:text-sm text-zinc-700 md:flex">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-black transition-colors">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 text-zinc-700 hover:text-black transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          <div 
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMenu}
          />
          {/* Mobile Menu */}
          <motion.nav
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-64 z-50 flex flex-col"
            style={{ 
              position: 'fixed',
              top: 0,
              right: 0,
              height: '100vh',
              width: '16rem',
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
              boxShadow: '-4px 0 24px 0 rgba(0, 0, 0, 0.15)',
              borderLeft: '1px solid rgba(255, 255, 255, 0.3)'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Background overlay для кращого контрасту */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-white/60 to-white/40 pointer-events-none"
              style={{ zIndex: -1 }}
            />
            
            {/* Close button */}
            <div className="flex items-center justify-between p-4 border-b border-zinc-200/50 relative z-10">
              <span className="font-semibold text-sm text-zinc-900">Menu</span>
              <button
                onClick={closeMenu}
                className="p-2 text-zinc-700 hover:text-black transition-colors"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col py-4 relative z-10">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-6 py-4 text-base text-zinc-900 hover:bg-zinc-100/50 hover:text-black transition-colors border-b border-zinc-200/30 font-medium"
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            {/* Contact Button */}
            <div className="mt-auto p-4 border-t border-zinc-200/50 relative z-10">
              <a
                href="#contact"
                onClick={closeMenu}
                className="block w-full rounded-full bg-black text-white px-6 py-3 text-sm text-center font-semibold hover:opacity-90 transition-all shadow-lg"
              >
                Get In Touch
              </a>
            </div>
          </motion.nav>
        </>
      )}
    </header>
  );
}

function MarqueeBand({ text }: { text: string }) {
  // Розділяємо текст на окремі слова
  const words = text.split(' / ').filter(word => word.trim() !== '');
  const items = Array(4).fill(words).flat(); // 4 копії для плавного циклу

  return (
    <div className="marquee">
      <div className="marquee__inner">
        {/* Оригінальний набір */}
        {items.map((word, i) => (
          <span
            key={`a-${i}`}
            className="shrink-0 inline-block px-8 text-[12px] md:text-sm uppercase tracking-[0.2em] text-black/70"
          >
            {word}
          </span>
        ))}
        {/* Дублікат — для безшовного переходу */}
        {items.map((word, i) => (
          <span
            key={`b-${i}`}
            className="shrink-0 inline-block px-8 text-[12px] md:text-sm uppercase tracking-[0.2em] text-black/70"
          >
            {word}
          </span>
        ))}
      </div>
    </div>
  );
}



function Hero() {
  return (
    <section id="top" className="bg-white">
      <div className="mx-auto max-w-4xl px-4 py-12 md:py-20 pb-6 md:pb-10 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-[1.05] px-2" style={{fontFamily:  'Roboto'}}>
          Marketing & Public Relations<br className="hidden md:block"/> Restaurants, Hotels & F&B Brands
        </h1>
        

        <div className="mt-6 md:mt-8 inline-flex flex-col sm:flex-row items-center gap-3">
          <a href="#contact" className="rounded-full bg-black text-white px-6 py-3 text-sm hover:opacity-90 transition">Let's Work Together</a>
          <a href="#services" className="text-sm underline underline-offset-4 hover:text-black/80">See services</a>
        </div>
      </div>
      <MarqueeBand text="Content Creation / Social Media Management / Influencer Marketing / Events / Paid Ads / Partnerships / Graphic Design" />

      <div className="w-full">
      <div className="overflow-hidden">
        <img
          src={HERO_IMAGE}
          alt="Olha intro"
          className="w-full h-[300px] sm:h-[400px] md:h-[450px] lg:h-[550px] object-cover object-center"
        />
      </div>
    </div>
    <MarqueeBand text="Content Creation / Social Media Management / Influencer Marketing / Events / Paid Ads / Partnerships / Graphic Design" />      </section>
  );
}







function About() {
  return (
    <section id="about" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle
          title={<>Nice to meet you - I'm Olha. I believe every detail should have a job to do - and do it beautifully.</>}
          titleClassName="italic"
        />
        
        {/* Новий дизайн з трьома візуальними елементами */}
        <div className="mx-auto max-w-6xl">
          {/* Три візуальні елементи з різною висотою */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Зліва - N2.JPG (менша висота) */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
              <img 
                src={getAssetPath("/portfolio/Vitalik/N2.JPG")} 
                alt="Portfolio work" 
                className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.03]" 
              />
            </div>

            {/* Посередині - відео (найвища) */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200 relative">
              <video 
                src={getAssetPath("/portfolio/Vitalik/F9E5D1BA-C8F7-417B-8EFD-E423BBC83B27.MP4")} 
                className="aspect-[3/5] w-full object-cover transition duration-300 group-hover:scale-[1.03] cursor-pointer"
                loop
                playsInline
                controls={false}
                preload="metadata"
                onPlay={(e) => {
                  const playIcon = e.currentTarget.parentElement?.querySelector('.play-icon');
                  if (playIcon) playIcon.classList.add('hidden');
                }}
                onPause={(e) => {
                  const playIcon = e.currentTarget.parentElement?.querySelector('.play-icon');
                  if (playIcon) playIcon.classList.remove('hidden');
                }}
                onClick={(e) => {
                  if (e.currentTarget.paused) {
                    e.currentTarget.play();
                  } else {
                    e.currentTarget.pause();
                  }
                }}
              />
              {/* Іконка play по центру */}
              <div className="play-icon absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center" 
                     style={{
                       boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
                     }}>
                  <div className="w-0 h-0 border-l-[12px] border-l-gray-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"
                       style={{
                         filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.8))'
                       }}>
                  </div>
                </div>
              </div>
            </div>

            {/* Справа - N3.JPG (менша висота) */}
            <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
              <img 
                src={getAssetPath("/portfolio/Vitalik/N3.JPG")} 
                alt="Portfolio work" 
                className="aspect-[3/4] w-full object-cover transition duration-300 group-hover:scale-[1.03]" 
              />
            </div>
          </div>


          {/* Новий дизайн: My Method секція */}
          <div className="mt-20">
            {/* Заголовок та підзаголовок */}
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-semibold text-zinc-900 mb-3 md:mb-4">Milestones That Matter</h2>
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif italic text-zinc-700 px-4">
                Marketing that feels like magic (but is backed by strategy)
              </h3>
            </div>

            {/* Основний контент: зображення зліва, блоки справа */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Зліва - зображення N4.JPG з полароїд рамкою */}
              <div className="relative">
                {/* Скрепка */}
                <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="w-8 h-8 bg-zinc-300 rounded-full flex items-center justify-center shadow-sm">
                    <div className="w-4 h-4 bg-zinc-500 rounded-full"></div>
                  </div>
                </div>
                
                {/* Полароїд рамка */}
                <div className="bg-white p-4 shadow-lg rounded-lg">
                  <div className="overflow-hidden rounded-sm">
                    <img 
                      src={getAssetPath("/portfolio/Vitalik/N4.JPG")} 
                      alt="My Method" 
                      className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]" 
                    />
                  </div>
                  {/* Біла рамка внизу полароїда */}
                  <div className="h-16 bg-white flex items-center justify-center">
                    <div className="w-8 h-1 bg-zinc-300 rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Справа - 5 блоків */}
              <div className="flex flex-col justify-between h-full gap-3 md:gap-4 w-full max-w-sm mx-auto">
                 {/* Блок 1 */}
                 <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'transparent' }}>
                   <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_Pink.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
                   <div className="p-4 md:p-6 text-center relative z-10">
                     <div className="text-2xl md:text-3xl font-serif font-semibold mb-1 md:mb-2 text-black">4+ years</div>
                     <div className="text-xs md:text-sm text-black font-serif">IN MARKETING</div>
                   </div>
                 </div>

                 {/* Блок 2 */}
                 <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'transparent' }}>
                   <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_White.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
                   <div className="p-4 md:p-6 text-center relative z-10">
                     <div className="text-2xl md:text-3xl font-serif font-semibold mb-1 md:mb-2 text-black">30M+</div>
                     <div className="text-xs md:text-sm text-black font-serif">CAMPAIGN VIEWS</div>
                   </div>
                 </div>

                 {/* Блок 3 */}
                 <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'transparent' }}>
                   <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_Pink.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
                   <div className="p-4 md:p-6 text-center relative z-10">
                     <div className="text-2xl md:text-3xl font-serif font-semibold mb-1 md:mb-2 text-black">50+</div>
                     <div className="text-xs md:text-sm text-black font-serif">EVENTS</div>
                   </div>
                 </div>

                 {/* Блок 4 */}
                 <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'transparent' }}>
                   <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_White.png')})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
                   <div className="p-4 md:p-6 text-center relative z-10">
                     <div className="text-2xl md:text-3xl font-serif font-semibold mb-1 md:mb-2 text-black">5</div>
                     <div className="text-xs md:text-sm text-black font-serif">RESTAURANT OPENINGS</div>
                   </div>
                 </div>

                 {/* Блок 5 */}
                 <div className="rounded-2xl overflow-hidden relative" style={{ backgroundColor: 'transparent' }}>
                   <div className="absolute inset-0" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_Pink.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center', mixBlendMode: 'multiply' }}></div>
                   <div className="p-4 md:p-6 text-center relative z-10">
                     <div className="text-2xl md:text-3xl font-serif font-semibold mb-1 md:mb-2 text-black">+600%</div>
                     <div className="text-xs md:text-sm text-black font-serif">PROFILE VISITS WITHIN FIRST MONTH</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  const [selectedService, setSelectedService] = React.useState<string | null>(null);
  
  const services = [
    { title: 'Social Media Management', desc: '' },
    { title: 'Content Creation', desc: 'Professional photography, videography, and creative content for all platforms.', link: '#portfolio' },
    { title: 'Influencer Partnerships', desc: '' },
    { title: 'Events', desc: 'Event planning, coordination, and marketing for restaurant launches and special occasions.' },
    { title: 'Campaigns & Partnerships', desc: 'Marketing campaigns and partnerships that help your brand grow.' },
    { title: 'Graphic Design', desc: 'Visual identity, branding materials, and creative design solutions.' },
    { title: 'Branding & Storytelling', desc: 'Brand development, narrative creation, and visual storytelling strategies.' },
    { title: 'Digital Marketing', desc: 'Comprehensive digital marketing strategies across all online platforms.' },
    { title: 'Customer Engagement', desc: 'Community building, customer retention, and engagement optimization strategies.' },
  ];
  return (
    <section id="services" className="relative overflow-hidden">
      <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${getAssetPath('/portfolio/Vitalik/AboutBG_Pink.jpg')})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/80 via-transparent to-zinc-50/80"></div>
      <div className="relative z-10 mx-auto max-w-6xl px-4 py-16">
        <SectionTitle title="Services" />
        
        {/* 9 блоків у сітці 3x3 */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Card key={i} className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer"
                   onClick={() => {
                     if (s.title === 'Content Creation') {
                       window.location.href = '#photo-video-examples';
                     } else {
                       setSelectedService(s.title);
                     }
                   }}>
              <div className="p-6 text-center flex items-center justify-center min-h-[120px]">
                <CardTitle className="text-lg font-serif mb-0" style={{fontFamily: 'Roboto'}}>
                  {s.title === 'Content Creation' ? (
                    <>
                      Content Creation<br/>
                      <span className="text-sm text-zinc-500">(see examples ↓)</span>
                    </>
                  ) : (
                    s.title
                  )}
                </CardTitle>
              </div>
            </Card>
          ))}
        </div>

        {/* "And More..." та кнопка */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-serif italic text-black mb-6">And More...</h3>
          <Button className="rounded-full bg-black text-white px-6 py-3 text-sm hover:opacity-90 transition">
            <a href="#contact">Let's Work Together</a>
          </Button>
        </div>

        {/* Модальне вікно */}
        {selectedService && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-md w-full p-4 md:p-6 relative my-4 max-h-[90vh] overflow-y-auto">
              <button 
                onClick={() => setSelectedService(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors z-10"
              >
                ×
              </button>
              <h3 className="text-xl md:text-2xl font-serif font-semibold mb-4 text-center pr-8" style={{fontFamily: 'Roboto'}}>
                {selectedService}
              </h3>
              {selectedService === 'Branding & Storytelling' ? (
                <div className="text-zinc-700 mb-6 text-center">
                  <p className="mb-3 text-center">• Develop a strong brand identity with a clear tone of voice and visual style.</p>
                  <p className="text-center">• Share the company's authentic story to build community connection.</p>
                </div>
              ) : selectedService === 'Digital Marketing' ? (
                <div className="text-zinc-700 mb-6 text-center">
                  <p className="mb-3 text-center">• Set up and optimize Google Business and Yelp profiles to boost visibility and reviews.</p>
                  <p className="text-center">• Launch targeted email marketing to promote specials, events, and loyalty programs.</p>
                </div>
              ) : selectedService === 'Customer Engagement' ? (
                <div className="text-zinc-700 mb-6 text-center">
                  <p className="mb-3 text-center">• Create a loyalty program to encourage repeat visits.</p>
                  <p className="text-center">• Offer referral incentives to grow the customer base.</p>
                </div>
              ) : (
                <p className="text-zinc-700 mb-6 text-center">
                  {services.find(s => s.title === selectedService)?.desc}
                </p>
              )}
              
              {/* Фотографії для Social Media Management */}
              {selectedService === 'Social Media Management' && (
                  <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                    <div className="text-center">
                      <div className="relative overflow-hidden rounded-xl shadow-lg ring-2 ring-black/10 bg-gray-100 mb-2">
                        <img src={getAssetPath("/portfolio/Vitalik/N5.jpg")} alt="Social Media Example 1" className="object-cover aspect-[3/4]" />
                      </div>
                      <div className="text-xs text-gray-600">
                        Post overview
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="relative overflow-hidden rounded-xl shadow-lg ring-2 ring-black/10 bg-gray-100 mb-2">
                        <img src={getAssetPath("/portfolio/Vitalik/N6.jpg")} alt="Social Media Example 2" className="object-cover aspect-[3/4]" />
                      </div>
                      <div className="text-xs text-gray-600">
                        Profile activity within 30 days
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="relative overflow-hidden rounded-xl shadow-lg ring-2 ring-black/10 bg-gray-100 mb-2">
                        <img src={getAssetPath("/portfolio/Vitalik/N7.jpg")} alt="Social Media Example 3" className="object-cover aspect-[3/4]" />
                      </div>
                      <div className="text-xs text-gray-600">
                        Influencer's collaboration
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="relative overflow-hidden rounded-xl shadow-lg ring-2 ring-black/10 bg-gray-100 mb-2">
                        <img src={getAssetPath("/portfolio/Vitalik/N8.jpg")} alt="Social Media Example 4" className="object-cover aspect-[3/4]" />
                      </div>
                      <div className="text-xs text-gray-600">
                        Page overview
                      </div>
                    </div>
                  </div>
              )}

              {selectedService === 'Influencer Partnerships' && (
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Events&Influencers/Influencers Event.JPG")} alt="Influencers Event" className="object-cover aspect-[4/5]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N10.jpg")} alt="N10" className="object-cover aspect-[4/5]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N11.jpg")} alt="N11" className="object-cover aspect-[4/5]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N12.jpg")} alt="N12" className="object-cover aspect-[4/5]" />
                  </div>
                </div>
              )}

              {selectedService === 'Events' && (
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div>
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                      <img src={getAssetPath("/portfolio/Events&Influencers/Cyklar P.JPG")} alt="Cyklar P" className="object-cover aspect-square" />
                    </div>
                    <div className="p-3 text-xs text-zinc-600">Cyklar Product Launch</div>
                  </div>
                  <div>
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                      <img src={getAssetPath("/portfolio/Events&Influencers/Summer Fridays Launch Event.JPG")} alt="Summer Fridays Launch Event" className="object-cover aspect-square" />
                    </div>
                    <div className="p-3 text-xs text-zinc-600">Summer Fridays Launch Event</div>
                  </div>
                  <div>
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                      <img src={getAssetPath("/portfolio/Events&Influencers/Esports Awards Afterparty.png")} alt="Esports Awards Afterparty" className="object-cover aspect-square" />
                    </div>
                    <div className="p-3 text-xs text-zinc-600">Esports Awards Afterparty</div>
                  </div>
                  <div>
                    <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                      <img src={getAssetPath("/portfolio/Events&Influencers/Influencers Event.JPG")} alt="Influencers Event" className="object-cover aspect-square" />
                    </div>
                    <div className="p-3 text-xs text-zinc-600">Influencers Event</div>
                  </div>
                </div>
              )}

              {selectedService === 'Campaigns & Partnerships' && (
                <div className="grid grid-cols-2 gap-2 md:gap-3 mb-4">
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Activations&Partnerships/OYSTERS LOVER HOUR-7.jpg")} alt="OYSTERS LOVER HOUR-7" className="object-cover aspect-[3/4]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Activations&Partnerships/1.png")} alt="1" className="object-cover aspect-[3/4]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Activations&Partnerships/2.png")} alt="2" className="object-cover aspect-[3/4]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Activations&Partnerships/3.png")} alt="3" className="object-cover aspect-[3/4]" />
                  </div>
                </div>
              )}

              {selectedService === 'Graphic Design' && (
                <div className="grid grid-cols-2 gap-2 md:gap-4 mb-4 md:mb-6">
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N13.png")} alt="N13" className="object-cover aspect-[3/4]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N14.png")} alt="N14" className="object-cover aspect-[3/4]" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Vitalik/N15.jpg")} alt="N15" className="object-cover aspect-[3/4] object-bottom" />
                  </div>
                  <div className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
                    <img src={getAssetPath("/portfolio/Activations&Partnerships/3.png")} alt="3" className="object-cover aspect-[3/4]" />
                  </div>
                </div>
              )}

              <div className="flex justify-center">
                <Button 
                  onClick={() => setSelectedService(null)}
                  className="rounded-full border border-gray-300 text-white px-6 py-3 text-sm hover:bg-gray-50 hover:text-black transition"
                >
                  Close
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function PhotoVideoExamples() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  
  const examples = [
    { type: 'image', src: getAssetPath('/portfolio/content photo examples/Chez Mia _ Interior shoot-073.jpg'), alt: 'Interior Photography' },
    { type: 'video', src: getAssetPath('/portfolio/Vitalik/2025.09.27 influ video .MP4'), alt: 'Influencer Video' },
    { type: 'image', src: getAssetPath('/portfolio/content photo examples/Chez Mia-055.jpg'), alt: 'Food Photography' },
    { type: 'image', src: getAssetPath('/portfolio/Events&Influencers/Influencers Event.JPG'), alt: 'Event Photography' },
    { type: 'video', src: getAssetPath('/portfolio/Vitalik/copy_6A1F0CDF-33CA-46A2-9273-C4AD5552033A.MP4'), alt: 'Creative Video' },
    { type: 'image', src: getAssetPath('/portfolio/content photo examples/Tezza-2728.jpg'), alt: 'Portrait Photography' },
    { type: 'image', src: getAssetPath('/portfolio/content photo examples/21.png'), alt: 'Event Coverage' },
    { type: 'video', src: getAssetPath('/portfolio/Vitalik/Instagram.MP4'), alt: 'Instagram Content' },
    { type: 'image', src: getAssetPath('/portfolio/content photo examples/Tezza-3250.JPG'), alt: 'Lifestyle Photography' },
  ];

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 768) return 3; // md and up: 3 items
      if (window.innerWidth >= 640) return 2; // sm: 2 items
      return 1; // mobile: 1 item
    }
    return 3; // default
  };

  const [itemsPerSlide, setItemsPerSlide] = React.useState(3);

  React.useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(getItemsPerSlide());
    };
    updateItemsPerSlide();
    window.addEventListener('resize', updateItemsPerSlide);
    return () => window.removeEventListener('resize', updateItemsPerSlide);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + itemsPerSlide) % examples.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - itemsPerSlide + examples.length) % examples.length);
  };

  return (
     <section id="photo-video-examples" className="bg-gradient-to-br from-zinc-50 to-white py-16 -mt-1">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title="Photo & Video Examples" titleClassName="italic" style={{fontFamily: 'Roboto'}} />
        
        {/* Стрілочки з боків */}
        <div className="flex items-center justify-center gap-3 md:gap-8">
          {/* Стрілочка вліво */}
          <button 
            onClick={prevSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            style={{
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
            }}
          >
            <div className="w-0 h-0 border-r-[8px] border-r-gray-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </button>

          {/* Слайдер з елементами */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 items-center flex-1">
            {examples.slice(currentIndex, currentIndex + itemsPerSlide).map((item, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
              {item.type === 'video' ? (
                <div className="relative">
                  <video 
                    src={item.src} 
                    className="aspect-[3/5] w-full object-cover transition duration-300 group-hover:scale-[1.03] cursor-pointer"
                    loop
                    playsInline
                    controls={false}
                    preload="metadata"
                    onClick={(e) => {
                      if (e.currentTarget.paused) {
                        e.currentTarget.play();
                      } else {
                        e.currentTarget.pause();
                      }
                    }}
                    onPlay={(e) => {
                      const playIcon = e.currentTarget.parentElement?.querySelector('.play-icon') as HTMLElement | null;
                      if (playIcon) playIcon.style.display = 'none';
                    }}
                    onPause={(e) => {
                      const playIcon = e.currentTarget.parentElement?.querySelector('.play-icon') as HTMLElement | null;
                      if (playIcon) playIcon.style.display = 'flex';
                    }}
                  />
                  {/* Іконка play по центру */}
                  <div className="play-icon absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center" 
                         style={{
                           boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
                         }}>
                      <div className="w-0 h-0 border-l-[12px] border-l-gray-600 border-t-[8px] border-t-transparent border-b-[8px] border-b-transparent ml-1"
                           style={{
                             filter: 'drop-shadow(1px 1px 2px rgba(0,0,0,0.3)) drop-shadow(-1px -1px 2px rgba(255,255,255,0.8))'
                           }}>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <img 
                  src={item.src} 
                  alt={item.alt} 
                  className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]" 
                />
              )}
            </div>
          ))}
          </div>

          {/* Стрілочка вправо */}
          <button 
            onClick={nextSlide}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0"
            style={{
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
            }}
          >
            <div className="w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
          </button>
        </div>

        {/* Індикатори слайдера */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {Array.from({ length: Math.ceil(examples.length / itemsPerSlide) }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i * itemsPerSlide)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                currentIndex === i * itemsPerSlide ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function LogosStrip() {
  if (!CLIENT_LOGOS.length) return null;
  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      <div className="flex flex-wrap items-center justify-center gap-8 opacity-70">
        {CLIENT_LOGOS.map((logo, i) => (
          <img key={i} src={logo.src} alt={logo.alt} className="h-8 object-contain" />
        ))}
      </div>
    </div>
  );
}

function Portfolio() {
  return (
    <section id="portfolio" className="bg-zinc-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <SectionTitle title="More Photo Examples..." />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {PORTFOLIO_IMAGES.map((img, i) => (
            <div key={i} className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-zinc-200">
              <img src={img.src} alt={img.alt} className="aspect-[4/5] w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
            </div>
          ))}
        </div>
        <LogosStrip />
      </div>
    </section>
  );
}

// Client Highlights Section
const CLIENT_HIGHLIGHT_LOGOS: { src: string; alt: string }[] = [
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/ChezMia_LogoLockup_ChezMiaBlue.png'), alt: 'Chez Mia Logo' },
  { src: getAssetPath('/portfolio/Companies%20i%20worked%20with/ChezMia_Wordmark_Blue.png'), alt: 'Chez Mia Wordmark' },
];

const BEFORE_AFTER_PAIRS: { before: string; after: string }[] = [
  { before: getAssetPath('/portfolio/Before_After/Chez%20Mia1%20(1).jpg'), after: getAssetPath('/portfolio/Before_After/Chez%20Mia%20After.jpeg') },
  { before: getAssetPath('/portfolio/Before_After/Brute%20Before.jpg'), after: getAssetPath('/portfolio/Before_After/Brute%20After.jpeg') },
  { before: getAssetPath('/portfolio/Before_After/BBN1.png'), after: getAssetPath('/portfolio/Before_After/BBN2.png') },
];

function ClientHighlights() {
  const [currentPairIndex, setCurrentPairIndex] = React.useState(0);
  
  const nextPair = () => {
    setCurrentPairIndex((prev) => (prev + 1) % BEFORE_AFTER_PAIRS.length);
  };

  const prevPair = () => {
    setCurrentPairIndex((prev) => (prev - 1 + BEFORE_AFTER_PAIRS.length) % BEFORE_AFTER_PAIRS.length);
  };

  return (
    <section id="client-highlights" className="bg-gradient-to-b from-white to-zinc-50">
      <div className="mx-auto max-w-6xl px-4 pt-16 pb-4">
        <SectionTitle title="Client Highlights" />
      </div>
      {/* Image marquee - full width */}
      <div className="marquee marquee-h-large">
        <div className="marquee__inner marquee__inner-fast">
            {CLIENT_HIGHLIGHT_IMAGES.concat(CLIENT_HIGHLIGHT_IMAGES).map((img, i) => (
              <div key={i} className="flex items-center justify-center px-8">
                <img src={img.src} alt={img.alt} className="h-32 md:h-40 w-auto object-contain opacity-90" />
              </div>
            ))}
        </div>
      </div>
      <div className="mx-auto max-w-6xl px-4 pt-8 md:pt-16 pb-12 md:pb-16">
        <h3 className="text-center text-xl md:text-2xl lg:text-3xl font-serif font-semibold mb-6 md:mb-8">Before/After</h3>
        
        {/* Slider with arrows - Desktop: horizontal, Mobile: vertical */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4">
          {/* Left/Top arrow */}
          <button 
            onClick={prevPair}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0 order-2 md:order-1"
            style={{
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
            }}
          >
            {/* Mobile: up arrow, Desktop: left arrow */}
            <div className="hidden md:block w-0 h-0 border-r-[8px] border-r-gray-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
            <div className="md:hidden w-0 h-0 border-b-[8px] border-b-gray-600 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
          </button>

          {/* Current pair */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 flex-1 order-1 md:order-2 w-full md:w-auto">
            <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:w-64 md:max-w-none h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200">
              <img src={BEFORE_AFTER_PAIRS[currentPairIndex].before} alt={`Before ${currentPairIndex + 1}`} className="w-full h-full object-cover" />
            </div>
            {/* Arrow between images */}
            <ArrowRight className="h-8 w-8 md:h-10 md:w-10 text-zinc-600 flex-shrink-0 rotate-90 md:rotate-0" />
            <div className="flex-shrink-0 w-full max-w-xs sm:max-w-sm md:w-64 md:max-w-none h-64 sm:h-80 md:h-96 lg:h-[500px] overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-zinc-200">
              <img src={BEFORE_AFTER_PAIRS[currentPairIndex].after} alt={`After ${currentPairIndex + 1}`} className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Right/Bottom arrow */}
          <button 
            onClick={nextPair}
            className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors flex-shrink-0 order-3"
            style={{
              boxShadow: '8px 8px 16px rgba(0,0,0,0.1), -8px -8px 16px rgba(255,255,255,0.7)'
            }}
          >
            {/* Mobile: down arrow, Desktop: right arrow */}
            <div className="hidden md:block w-0 h-0 border-l-[8px] border-l-gray-600 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent"></div>
            <div className="md:hidden w-0 h-0 border-t-[8px] border-t-gray-600 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent"></div>
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center mt-6 md:mt-8 space-x-2">
          {BEFORE_AFTER_PAIRS.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentPairIndex(i)}
              className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-colors ${
                currentPairIndex === i ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-3xl px-4 py-16 text-center">
        <SectionTitle
          title="Let’s Bring Your Brand to Life"
          subtitle="Launching a new menu, opening a hotel, or refreshing your online presence? I’m here to help."
        />
        <div className="mt-6 flex flex-col items-center gap-3">
          <Button className="rounded-2xl px-6">
            <a href="mailto:oliakarvatska@gmail.com?subject=Discovery%20Call%20Request">Get In Touch</a>
          </Button>
          <div className="mt-4 text-sm text-zinc-700">
            <a className="underline-offset-4 hover:underline" href="mailto:oliakarvatska@gmail.com">oliakarvatska@gmail.com</a>
          </div>
          <div className="mt-2 flex items-center justify-center gap-3 text-sm text-zinc-700">
            <a className="inline-flex items-center gap-1 underline-offset-4 hover:underline" href="https://www.instagram.com/oliakarvatskaa/" target="_blank" rel="noreferrer">
              <Instagram className="h-4 w-4" /> Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t bg-zinc-50">
      <div className="mx-auto flex max-w-6xl flex-col sm:flex-row items-center justify-between px-4 py-6 md:py-8 text-sm text-zinc-600 gap-2">
        <div>© {new Date().getFullYear()} Olha Karvatska</div>
        <a href="#top" className="underline-offset-4 hover:underline">Back to top</a>
      </div>
    </footer>
  );
}
export default function OlhaPortfolioPage() {
  return (
    <main className="min-h-dvh scroll-smooth">
      <Nav />
      <Hero />
      <About />
      <Services />
      <PhotoVideoExamples />
      <Portfolio />
      <ClientHighlights />
      <Contact />
      <Footer />
    </main>
  );
}


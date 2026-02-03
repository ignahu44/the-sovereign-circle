const partners = [
  'Meridian Capital',
  'Apex Ventures',
  'Sovereign Holdings',
  'Atlas Strategic',
  'Pinnacle Group',
  'Vanguard Partners',
  'Citadel Equity',
  'Northstar Investments',
  'Summit Partners',
  'Horizon Capital',
];

const TrustedBySection = () => {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 mb-12">
        <p className="text-foreground-muted text-sm tracking-[0.3em] uppercase text-center">
          Trusted Network
        </p>
      </div>

      {/* Infinite Scroll Container */}
      <div className="relative">
        {/* Gradient Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        {/* Scrolling Content */}
        <div className="flex animate-scroll">
          {/* First set */}
          {partners.map((partner, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 px-12 py-4 group cursor-default"
            >
              <span className="text-foreground-muted/40 text-xl font-serif tracking-wide transition-all duration-300 group-hover:text-gold-subtle">
                {partner}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop */}
          {partners.map((partner, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 px-12 py-4 group cursor-default"
            >
              <span className="text-foreground-muted/40 text-xl font-serif tracking-wide transition-all duration-300 group-hover:text-gold-subtle">
                {partner}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBySection;

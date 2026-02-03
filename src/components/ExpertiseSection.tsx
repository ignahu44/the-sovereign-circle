import { useEffect, useRef } from 'react';

const ExpertiseSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('.reveal');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-32 px-6 bg-background-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <p className="text-gold-subtle text-sm tracking-[0.3em] uppercase mb-4 reveal">
              Expertise & Capital
            </p>
            <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 reveal">
              More Than Capital.<br />
              Strategic Partnership.
            </h2>
            <div className="section-divider mb-8 reveal" />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="reveal">
              <h3 className="text-lg font-serif text-foreground mb-3">
                Operator-Level Experience
              </h3>
              <p className="text-foreground-muted font-sans font-light leading-relaxed">
                Our members have built and scaled companies across sectors. 
                They invest not just capital, but decades of operational wisdom.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '150ms' }}>
              <h3 className="text-lg font-serif text-foreground mb-3">
                Long-Term Involvement
              </h3>
              <p className="text-foreground-muted font-sans font-light leading-relaxed">
                We measure success in decades, not quarters. 
                Strategic involvement that compounds over time.
              </p>
            </div>

            <div className="reveal" style={{ transitionDelay: '300ms' }}>
              <h3 className="text-lg font-serif text-foreground mb-3">
                Global Yet Selective
              </h3>
              <p className="text-foreground-muted font-sans font-light leading-relaxed">
                Presence across continents, but membership remains deliberately limited. 
                Reach without dilution.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;

import { useEffect, useRef } from 'react';

const advantages = [
  {
    title: 'Curated Access',
    description: 'Every member is personally vetted. Every introduction is deliberate. Access to opportunities that never reach the public market.',
  },
  {
    title: 'Strategic Proximity',
    description: 'Sit at the table with decision-makers. Not observers. The relationships formed here shape industries.',
  },
  {
    title: 'Trusted Relationships',
    description: 'Built over years, not transactions. A network where your word is your bond and confidentiality is absolute.',
  },
];

const AdvantageSection = () => {
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
    <section ref={sectionRef} className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <p className="text-gold-subtle text-sm tracking-[0.3em] uppercase mb-4 reveal">
            The Advantage
          </p>
          <h2 className="text-3xl md:text-5xl font-serif text-foreground reveal">
            What Cannot Be Replicated
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {advantages.map((item, index) => (
            <div
              key={item.title}
              className="reveal"
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="h-[1px] w-12 bg-gold-subtle mb-8" />
              <h3 className="text-xl md:text-2xl font-serif text-foreground mb-4">
                {item.title}
              </h3>
              <p className="text-foreground-muted font-sans font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;

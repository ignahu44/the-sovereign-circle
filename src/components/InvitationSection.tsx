import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';

const InvitationSection = () => {
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
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-gold-subtle text-sm tracking-[0.3em] uppercase mb-4 reveal">
          By Invitation
        </p>
        
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8 reveal">
          The Door Is Rarely Open
        </h2>
        
        <p className="text-foreground-muted font-sans font-light leading-relaxed mb-12 reveal">
          Membership is extended selectively to those who share our commitment 
          to discretion, long-term value creation, and mutual trust. 
          If you believe you belong here, we invite you to inquire.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center reveal">
          <Button variant="gold" size="xl">
            Request an Introduction
          </Button>
          <Button variant="gold-outline" size="xl">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
};

export default InvitationSection;

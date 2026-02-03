import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import heroVideo from '@/assets/hero-video.mp4';

const HeroSection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay may be blocked, that's okay
      });
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 video-overlay" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 fade-in-up">
          Where Capital Meets Conviction
        </h1>
        
        <p className="text-lg md:text-xl text-foreground-muted max-w-2xl mx-auto mb-10 font-sans font-light leading-relaxed fade-in-up fade-in-up-delay-1">
          An invitation-only network for exceptional investors, operators, and founders 
          who value depth over scale, and discretion over visibility.
        </p>

        <div className="fade-in-up fade-in-up-delay-2">
          <Button variant="gold" size="xl">
            Request Access
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 fade-in-up fade-in-up-delay-3">
        <div className="w-[1px] h-16 bg-gradient-to-b from-gold-subtle/50 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;

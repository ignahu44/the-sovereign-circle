import HeroSection from '@/components/HeroSection';
import AdvantageSection from '@/components/AdvantageSection';
import ExpertiseSection from '@/components/ExpertiseSection';
import TrustedBySection from '@/components/TrustedBySection';
import InvitationSection from '@/components/InvitationSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <main className="bg-background min-h-screen">
      <HeroSection />
      <AdvantageSection />
      <ExpertiseSection />
      <TrustedBySection />
      <InvitationSection />
      <Footer />
    </main>
  );
};

export default Index;

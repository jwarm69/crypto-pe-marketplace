import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import WhyCryptoSMBsSection from '@/components/WhyCryptoSMBsSection';
import TwoSidedCallouts from '@/components/TwoSidedCallouts';
import MembershipPricingSection from '@/components/MembershipPricingSection';
import FundSection from '@/components/FundSection';
import CommunityCredibilitySection from '@/components/CommunityCredibilitySection';
import FinalCTASection from '@/components/FinalCTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <WhyCryptoSMBsSection />
      <TwoSidedCallouts />
      <MembershipPricingSection />
      <FundSection />
      <CommunityCredibilitySection />
      <FinalCTASection />
      <Footer />
    </div>
  );
}


import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import PartnersSection from '@/components/PartnersSection';
import ServicesSection from '@/components/ServicesSection';
import WhyChooseUsSection from '@/components/WhyChooseUsSection';


const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      
      <HeroSection />
      <StatsSection />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseUsSection />
      
    </div>
  );
};

export default Index;

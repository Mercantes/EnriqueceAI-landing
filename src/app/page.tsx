import { FaqSection } from './_components/FaqSection';
import { FeaturesSection } from './_components/FeaturesSection';
import { HeroWithForm } from './_components/HeroWithForm';
import { LandingFooter } from './_components/LandingFooter';
import { LogoBar } from './_components/LogoBar';
import { MetricsSection } from './_components/MetricsSection';
import { ProductShowcase } from './_components/ProductShowcase';
import { SalesEngagementSection } from './_components/SalesEngagementSection';
import { SmoothScroll } from './_components/SmoothScroll';

export default function Home() {
  return (
    <main>
      <SmoothScroll />
      <HeroWithForm />
      <LogoBar />
      <SalesEngagementSection />
      <MetricsSection />
      <ProductShowcase />
      <FeaturesSection />
      <FaqSection />
      <LandingFooter />
    </main>
  );
}

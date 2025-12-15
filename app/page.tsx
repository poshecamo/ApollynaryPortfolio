import { InstagramSection } from "@/components/sections/instagram-section"
import { ExpertiseSection } from "@/components/sections/expertise-section"

import { HowIWorkSection } from "@/components/sections/how-i-work-section"
import { Analytics } from "@vercel/analytics/next"
import { SubstackSection } from "@/components/sections/substack-section"

import { LenisProvider } from "@/components/lenis-provider"
import { CustomCursor } from "@/components/custom-cursor"

import { HeroSection } from "@/components/sections/hero-section"
import { ManifestoSection } from "@/components/sections/manifesto-section"
import { FeaturesSection } from "@/components/sections/features-section"
import { ShowcaseSection } from "@/components/sections/showcase-section"
import { CarouselSection } from "@/components/sections/carousel-section"
import { InsightsSection } from "@/components/sections/insights-section"
import { PricingSection } from "@/components/sections/pricing-section"
import { FooterSection } from "@/components/sections/footer-section"
import { FeaturedContentSection } from "@/components/sections/featured-content-section"

export default function Home() {
  return (
    <LenisProvider>
      <main className="custom-cursor bg-background">
        <CustomCursor />
        <HeroSection />
        <ManifestoSection />
        <ExpertiseSection/>
        <FeaturesSection />
        <HowIWorkSection />
        <PricingSection />
        <SubstackSection />
     
        <InsightsSection />
        <InstagramSection />
        <FooterSection />
      
      </main>
    </LenisProvider>
  )
}

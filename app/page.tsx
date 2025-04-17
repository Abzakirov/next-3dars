import WhyChooseSection from "@/components/choose";
import FeaturesSection from "@/components/example";
import FAQSection from "@/components/faq";
import Integrations from "@/components/faster";
import LandingHeroFooter from "@/components/footer";
import Showcase from "@/components/showcase";
import React from "react";

const Page = () => {
  return (
    <div>
      <Showcase />
      <Integrations />
      <FeaturesSection />
      <WhyChooseSection />
      <FAQSection />
      <LandingHeroFooter />
    </div>
  );
};

export default Page;

import WhyChooseSection from "@/components/choose";
import FeaturesSection from "@/components/example";
import Integrations from "@/components/faster";
import Showcase from "@/components/showcase";
import React from "react";

const Page = () => {
  return (
    <div>
      <Showcase />
      <Integrations />
      <FeaturesSection />
      <WhyChooseSection />
    </div>
  );
};

export default Page;

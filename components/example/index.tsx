import React from "react";
import { Palette } from "lucide-react";

const features = [
  {
    title: "Responsive Design",
    description: "Create stunning websites that adapt seamlessly to different screen sizes and devices.",
  },
  {
    title: "Extensive Component Library",
    description: "Choose from a vast collection of pre-built components to accelerate your application development.",
  },
  {
    title: "Customizable Styles",
    description: "Easily customize the look and feel of your application with our flexible styling options.",
  },
  {
    title: "Accessibility Ready",
    description: "Ensure your application is accessible to all users, regardless of their abilities or devices.",
  },
  {
    title: "Cross-Browser Compatibility",
    description: "Rest assured that your application will work flawlessly across all major browsers.",
  },
  {
    title: "Optimized Performance",
    description: "Deliver fast-loading and smooth user experiences with our performance-optimized codebase.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        12+ Starter Pages &{" "}
        <span className="text-blue-600">Examples</span>
      </h2>
      <p className="text-gray-500 max-w-xl mx-auto mb-12">
        Kick-start your projects with Preline Pro’s wide range of examples, using pre-built UI parts,
        custom components and layouts using Tailwind CSS.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-4 text-left">
            <Palette className="w-6 h-6 text-black shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">{feature.title}</h4>
              <p className="text-gray-500 mt-1">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;

import React from "react";
import { Palette } from "lucide-react";

const reasons = [
  {
    title: "Simplicity",
    description:
      "Our framework is designed to be user-friendly, allowing developers of all levels to create professional-looking applications with ease.",
  },
  {
    title: "Versatility",
    description:
      "Shadcn UI Pro is well-suited for a wide range of applications, from corporate websites to e-commerce platforms and personal blogs.",
  },
  {
    title: "Excellent Support",
    description:
      "Our dedicated support team is always available to assist you with any issues or questions you may have.",
  },
  {
    title: "Regular Updates",
    description:
      "We continually improve and enhance Shadcn UI Pro based on user feedback and emerging industry trends.",
  },
  {
    title: "Thriving Community",
    description:
      "Join our active community of developers to collaborate, learn, and access valuable resources.",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="py-20 px-6">
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Why Choose <span className="text-blue-600">Shadcn UI Pro?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <Palette className="w-6 h-6 text-black shrink-0 mt-1" />
            <div>
              <h4 className="font-semibold text-lg">{item.title}</h4>
              <p className="text-gray-500 mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseSection;

"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Does Shadcn UI Pro Affliated with Shadcn or Shadcn/ui?",
    answer:
      "No. Shadcn UI Pro is a professional template that integrates many sass services and can quickly build entrepreneurial projects.",
  },
  {
    question: "What is Shadcn UI Pro?",
    answer: "Shadcn UI Pro is a premium UI kit built with Shadcn/ui.",
  },
  {
    question: "What are the key features of Shadcn UI Pro?",
    answer:
      "Features include prebuilt components, themes, accessibility, responsiveness, and performance optimizations.",
  },
  {
    question: "Can Shadcn UI Pro be used for different screen sizes and devices?",
    answer: "Yes, it's fully responsive and adapts to various screen sizes.",
  },
  {
    question: "Is it easy to customize the styles of Shadcn UI Pro?",
    answer: "Yes, thanks to Tailwind CSS and utility-based styling.",
  },
  {
    question: "Does Shadcn UI Pro support accessibility?",
    answer: "Yes, it's built with accessibility best practices.",
  },
  {
    question: "Will my application built with Shadcn UI Pro work on different browsers?",
    answer: "Yes, it's compatible with all modern browsers.",
  },
  {
    question: "Does Shadcn UI Pro prioritize performance?",
    answer: "Yes, performance and best practices are built in.",
  },
  {
    question: "Is Shadcn UI Pro suitable for beginners?",
    answer: "Absolutely. It’s beginner-friendly and well-documented.",
  },
];

export default function FAQSection() {
  return (
    <div className="w-full mx-auto py-16 px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">FAQ</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, idx) => (
          <AccordionItem key={idx} value={`item-${idx}`}>
            <AccordionTrigger>{faq.question}</AccordionTrigger>
            <AccordionContent>{faq.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Image from "next/image";
import { Code, Smartphone, MessageSquare, Bot } from 'lucide-react';

export default function FeatureAccordionSection() {
  const features = [
    {
      id: "item-1",
      title: "Web Development",
      count: "01",
      icon: <Code className="w-5 h-5" />,
      image: "/services/Web Development.jpeg",
      description: "Custom, lightning-fast, and search-optimized websites and web applications built using Next.js and React. Engineered to double your conversion rate and establish instant brand authority."
    },
    {
      id: "item-2",
      title: "App Development",
      count: "02",
      icon: <Smartphone className="w-5 h-5" />,
      image: "/services/UI-UX.png",
      description: "High-performance cross-platform iOS and Android mobile applications powered by React Native, delivering native-grade fluidity and seamless integrations."
    },
    {
      id: "item-3",
      title: "Whatsapp Automations",
      count: "03",
      icon: <MessageSquare className="w-5 h-5" />,
      image: "/services/whatsapp-automation.png",
      description: "Automate your customer engagement, support, and business sales processes with conversational workflows and chatbots using the official WhatsApp Business Cloud API."
    },
    {
      id: "item-4",
      title: "Ai agent Automations",
      count: "04",
      icon: <Bot className="w-5 h-5" />,
      image: "/services/ai-agent-automations.png",
      description: "Supercharge your business efficiency with advanced AI agents and cognitive workflows. We build LLM-powered virtual teammates and autonomous operation pipelines."
    }
  ];

  return (
    <section className="bg-surface text-primary relative overflow-hidden py-32">
      <div className="mx-auto w-full max-w-[1280px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Content */}
          <div className="lg:sticky lg:top-32">
            <p className="label-sm text-accent mb-4 uppercase tracking-widest font-bold">What We Do</p>
            <h2 className="text-primary text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight mb-6">
              Premium Services for<br/>Modern Brands.
            </h2>
            <p className="text-gray-600 text-lg max-w-md mb-8">
              We combine stunning aesthetics with robust engineering to deliver digital solutions that stand out and scale effortlessly.
            </p>
          </div>

          {/* Right Accordion */}
          <div className="flex flex-col w-full border border-gray-200 rounded-2xl shadow-sm bg-white p-6">
            <Accordion type="single" collapsible defaultValue="item-1" className="w-full">
              {features.map((feature) => (
                <AccordionItem
                  key={feature.id}
                  value={feature.id}
                  className="border-b border-gray-100 last:border-0"
                >
                  <AccordionTrigger className="flex items-center gap-4 py-6 text-left hover:no-underline group">
                    <div className="p-3 bg-gray-50 rounded-lg text-gray-700 group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                      {feature.icon}
                    </div>
                    <span className="flex-1 text-xl font-heading font-semibold group-hover:text-accent transition-colors">{feature.title}</span>
                    <span className="text-sm font-mono text-gray-400 group-hover:text-accent/60">
                      {feature.count}
                    </span>
                  </AccordionTrigger>

                  <AccordionContent className="px-2 pb-6 pt-2 space-y-4">
                    <p className="text-base text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="w-full relative aspect-[16/9] rounded-xl overflow-hidden border border-gray-100 shadow-sm">
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </div>
    </section>
  );
}

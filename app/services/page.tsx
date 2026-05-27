"use client";

import { motion } from "framer-motion";
import { Code, Smartphone, Globe, MessageSquare, Bot } from "lucide-react";

export default function Services() {
  const servicesList = [
    {
      title: "Web Development",
      desc: "Custom, lightning-fast, and search-optimized websites and web applications built using Next.js and React. Engineered to double your conversion rate and establish instant brand authority.",
      icon: Globe,
      features: ["Next.js & React Core", "Custom Animated UI/UX", "SEO & Speed Optimization"]
    },
    {
      title: "App Development",
      desc: "High-performance cross-platform iOS and Android mobile applications powered by React Native. Delivering native-grade fluidity, robust security, and seamless API integrations.",
      icon: Smartphone,
      features: ["Cross-Platform React Native", "App Store Deployment", "Offline & Push Notifications"]
    },
    {
      title: "Whatsapp Automations",
      desc: "Automate your customer engagement, support, and business sales processes. We implement robust conversational workflows, broadcast channels, and chatbots using the official WhatsApp Business Cloud API.",
      icon: MessageSquare,
      features: ["Official Cloud API Integration", "Custom AI Support Bot", "Broadcast & Alert Systems"]
    },
    {
      title: "Ai agent Automations",
      desc: "Supercharge your business efficiency with advanced AI agents and cognitive workflows. We build LLM-powered virtual teammates, semantic search (RAG) knowledge systems, and autonomous operation pipelines.",
      icon: Bot,
      features: ["LangChain & OpenAI Agent Workflows", "Custom Knowledge Base RAG", "Autonomous Action Chains"]
    }
  ];

  return (
    <div className="pt-32 pb-24 min-h-screen bg-surface">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-24"
        >
          <p className="label-sm text-accent mb-6 flex items-center gap-2">
            <span className="w-8 h-px bg-accent"></span> Our Expertise
          </p>
          <h1 className="display-lg-mobile md:display-lg text-primary mb-8">
            Engineering <br/>Digital Excellence.
          </h1>
          <p className="text-xl text-text-muted font-body">
            From complex web applications to stunning corporate websites, we provide end-to-end digital services tailored for modern enterprises.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {servicesList.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="bg-surface-dim border border-outline p-10 hover:border-primary transition-all duration-500 group relative overflow-hidden"
            >
              {/* Hover background effect */}
              <div className="absolute inset-0 bg-primary translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out -z-0"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="w-16 h-16 bg-white border border-outline flex items-center justify-center mb-8 text-primary group-hover:border-accent group-hover:bg-accent transition-colors duration-500">
                  <service.icon className="w-8 h-8" />
                </div>
                
                <h3 className="text-2xl font-heading font-bold text-primary group-hover:text-surface transition-colors duration-500 mb-4">
                  {service.title}
                </h3>
                
                <p className="text-text-muted font-body leading-relaxed group-hover:text-surface/80 transition-colors duration-500 mb-8 flex-1">
                  {service.desc}
                </p>

                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm font-bold text-primary group-hover:text-surface transition-colors duration-500">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

"use client";

import { Card } from '@/components/ui/card'
import { Code, Layout, TrendingUp } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-surface text-primary relative overflow-hidden">
            <div className="py-32">
                <div className="mx-auto w-full max-w-[1280px] px-6">
                    <div>
                        <p className="label-sm text-accent mb-4 uppercase tracking-widest font-bold">What We Do</p>
                        <h2 className="text-primary max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">Premium Services for<br/>Modern Brands.</h2>
                    </div>
                    <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card
                            variant="soft"
                            className="overflow-hidden p-6 bg-primary/5 border border-primary/10 hover:border-accent transition-colors group">
                            <Code className="text-accent size-6 mb-2" />
                            <h3 className="text-primary mt-5 text-xl font-heading font-bold">Web Development</h3>
                            <p className="text-primary/70 mt-3 text-balance font-body text-sm leading-relaxed">High-performance, scalable web applications built with modern frameworks and robust backend infrastructure.</p>

                            <div className="mt-8 relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-primary/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/services/Web Development.jpeg" alt="Web Development" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Card>

                        <Card
                            variant="soft"
                            className="group overflow-hidden px-6 pt-6 bg-primary/5 border border-primary/10 hover:border-accent transition-colors">
                            <Layout className="text-accent size-6 mb-2" />
                            <h3 className="text-primary mt-5 text-xl font-heading font-bold">UI/UX Design</h3>
                            <p className="text-primary/70 mt-3 text-balance font-body text-sm leading-relaxed">Intuitive, pixel-perfect interfaces designed for maximum user engagement and seamless experiences.</p>

                            <div className="mt-8 relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-primary/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/services/UI-UX.png" alt="UI/UX Design" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Card>
                        
                        <Card
                            variant="soft"
                            className="group overflow-hidden px-6 pt-6 bg-primary/5 border border-primary/10 hover:border-accent transition-colors">
                            <TrendingUp className="text-accent size-6 mb-2" />
                            <h3 className="text-primary mt-5 text-xl font-heading font-bold">SEO Optimization</h3>
                            <p className="text-primary/70 mt-3 text-balance font-body text-sm leading-relaxed">Data-driven search strategies and technical SEO to boost your organic visibility and drive qualified traffic.</p>

                            <div className="mt-8 relative aspect-[4/3] w-full rounded-lg overflow-hidden border border-primary/10">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src="/services/SEO.png" alt="SEO Optimization" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" />
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}

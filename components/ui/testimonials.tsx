"use client"
 
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
 
export default function TestimonialSection() {
    const testimonials = [
        {
            name: 'Prakash Belunke',
            role: 'Founder of PNB Technologies',
            avatar: '/PNB.png',
            content: "MBM Tech Studio built an amazing website for our company. They were fast, professional, and the final design looks absolutely incredible.",
        },
        {
            name: 'Atharva Umbarkar',
            role: 'Founder of AIBlog',
            avatar: '',
            fallback: 'A',
            content: "I'm super impressed with the website they developed for my blog. It's lightning fast, looks great, and is exactly what I was looking for.",
        },
        {
            name: 'Madox Team',
            role: 'Creative Partner',
            avatar: '',
            fallback: 'M',
            content: "They created a beautiful, responsive website for us from scratch. Great communication throughout the whole process and top-notch results.",
        },
    ]
 
    return (
        <section className="bg-surface text-primary relative overflow-hidden">
            <div className="py-32">
                <div className="mx-auto w-full max-w-[1280px] px-6">
                    <div className="mb-16">
                        <p className="label-sm text-accent mb-4 uppercase tracking-widest font-bold">TESTIMONIALS</p>
                        <h2 className="text-primary max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">What Our Clients Say.</h2>
                    </div>
 
                    {/* Grid: 1 col → 2 cols → 3 cols */}
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-primary/5 border border-primary/10 hover:border-accent transition-colors rounded-2xl px-6 py-6"
                            >
                                <p className="text-primary/80 font-body text-sm leading-relaxed mb-6">"{testimonial.content}"</p>
                                <div className="mt-auto flex items-center gap-3">
                                    <Avatar className="size-10 border border-primary/20 shadow-md">
                                        {testimonial.avatar && (
                                            <AvatarImage
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                            />
                                        )}
                                        <AvatarFallback className="bg-accent/10 text-accent font-bold">
                                            {testimonial.fallback || testimonial.name.charAt(0)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div className="flex flex-col">
                                        <span className="text-primary font-heading font-bold text-sm">{testimonial.name}</span>
                                        <span className="text-primary/50 font-body text-xs">{testimonial.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}


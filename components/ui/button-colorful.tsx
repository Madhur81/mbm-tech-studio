import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

interface ButtonColorfulProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
    icon?: React.ReactNode;
}

export function ButtonColorful({
    className,
    label = "Explore Components",
    icon,
    ...props
}: ButtonColorfulProps) {
    return (
        <Button
            className={cn(
                "relative h-14 px-8 text-base overflow-hidden rounded-lg",
                "bg-zinc-900 dark:bg-zinc-100",
                "transition-all duration-200",
                "group",
                className
            )}
            {...props}
        >
            {/* Gradient background effect */}
            <div
                className={cn(
                    "absolute inset-0",
                    "bg-gradient-to-r from-rose-600 via-red-500 to-red-600",
                    "opacity-40 group-hover:opacity-80",
                    "blur transition-opacity duration-500"
                )}
            />

            {/* Content */}
            <div className="relative flex items-center justify-center gap-2">
                <span className="text-white dark:text-zinc-900">{label}</span>
                {icon ? icon : <ArrowUpRight className="w-3.5 h-3.5 text-white/90 dark:text-zinc-900/90" />}
            </div>
        </Button>
    );
}

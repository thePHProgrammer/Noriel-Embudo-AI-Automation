"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 min-h-11 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        gradient:
          "bg-gradient-accent text-white shadow-[0_0_0_1px_rgba(255,255,255,0.08)] hover:brightness-110",
        outline:
          "border border-input bg-transparent text-foreground hover:bg-white/5",
        ghost: "text-foreground hover:bg-white/5",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-2.5",
        sm: "px-4 py-2 text-sm",
        lg: "px-8 py-3.5 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: {
      variant: "gradient",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };

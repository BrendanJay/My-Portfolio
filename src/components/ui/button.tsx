import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { Slot } from "@radix-ui/react-slot"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-white/20 focus-visible:ring-offset-0 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-white/90 shadow-[0_1px_0_0_rgba(255,255,255,0.06)_inset,0_0_0_1px_rgba(255,255,255,0.08),0_1px_2px_0_rgba(0,0,0,0.12)]",
        destructive:
          "bg-red-500 text-white hover:bg-red-500/90 shadow-[0_1px_0_0_rgba(255,255,255,0.08)_inset,0_0_0_1px_rgba(239,68,68,0.3)]",
        outline:
          "border border-white/10 bg-white/[0.02] text-gray-200 hover:bg-white/[0.04] hover:border-white/15 shadow-[0_1px_0_0_rgba(255,255,255,0.04)_inset]",
        secondary:
          "bg-white/[0.06] text-gray-100 hover:bg-white/[0.1] border border-white/10",
        ghost:
          "text-gray-300 hover:bg-white/[0.05] hover:text-white",
        link: "text-white underline-offset-4 hover:underline font-medium",
      },
      size: {
        default: "h-10 px-4 py-2 rounded-md",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-6",
        icon: "h-10 w-10 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }

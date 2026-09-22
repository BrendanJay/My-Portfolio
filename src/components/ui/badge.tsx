import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-white text-black hover:bg-white/90",
        secondary:
          "border border-white/10 bg-white/[0.03] text-gray-300 hover:bg-white/[0.06]",
        destructive:
          "border-transparent bg-red-500 text-white hover:bg-red-500/90",
        outline:
          "border border-white/10 text-gray-300 bg-transparent",
        success:
          "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400",
        muted:
          "border border-white/5 bg-white/[0.02] text-gray-500",
        accent:
          "border border-blue-500/20 bg-blue-500/10 text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }

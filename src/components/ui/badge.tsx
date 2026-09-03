import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-teal-600 text-white shadow-sm",
        teal:
          "border-teal-200 bg-teal-50 text-teal-700",
        navy:
          "border-slate-300 bg-slate-100 text-slate-800",
        secondary:
          "border-slate-200 bg-slate-50 text-slate-700",
        destructive:
          "border-rose-200 bg-rose-50 text-rose-700",
        emerald:
          "border-emerald-200 bg-emerald-50 text-emerald-700",
        amber:
          "border-amber-200 bg-amber-50 text-amber-700",
        outline: "border-slate-300 bg-white text-slate-700",
        glow: "border-teal-300 bg-teal-50 text-teal-800 shadow-sm",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

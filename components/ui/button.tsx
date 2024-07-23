import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[16px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:shadow-[0px_0px_32px_0px_#633CFF40] hover:bg-primary-alt",
                secondary:
                    "bg-whitesmoke border-[1px] text-primary hover:bg-secondary/80",
            },
            size: {
                default: "h-[46px] px-[27px] py-[11px] rounded-[8px]",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    },
);

export interface ButtonProperties
    extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
    isLoading?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProperties>(
    ({ className, variant, size, asChild = false, ...properties }, reference) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={reference}
                {...properties}
            />
        );
    },
);

Button.displayName = "Button";

export { Button };
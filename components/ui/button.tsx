import { cn } from "@/lib/utils";
import { Slot } from "@radix-ui/react-slot";
import { cva, VariantProps } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

export const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-[16px] font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-25",
    {
        variants: {
            variant: {
                default: "bg-primary text-white hover:shadow-[0px_0px_32px_0px_#633CFF40] hover:bg-primary-alt",
                secondary:
                    "bg-white border-[1px] text-primary hover:bg-primary-light",
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
    ({ className, variant, size, asChild = false, children, isLoading, disabled, ...properties }, reference) => {
        const Element = asChild ? Slot : "button";
        return (
            <Element
                className={cn(buttonVariants({ variant, size, className }))}
                ref={reference}
                disabled={isLoading || disabled}
                {...properties}
            >
                {isLoading ? (
                    <svg
                        className="animate-spin h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <circle
                            className="opacity-25"
                            cx={12}
                            cy={12}
                            r={10}
                            stroke="currentColor"
                            strokeWidth={4}
                        />
                        <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        />
                    </svg>
                ) : (
                    children
                )}
            </Element>
        );
    },
);

Button.displayName = "Button";

export { Button };
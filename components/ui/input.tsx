import { cn } from "@/lib/utils";
import { forwardRef, ReactNode, type InputHTMLAttributes } from "react";

export interface InputProperties
    extends InputHTMLAttributes<HTMLInputElement> {
    leading?: ReactNode;
    containerClassName?: string;
    error?: string | null;
}

const Input = forwardRef<HTMLInputElement, InputProperties>(
    ({ className, type, leading, containerClassName, error, ...properties }, reference) => {
        return (
            <div className={cn("relative", containerClassName)}>
                {
                    leading && (
                        <div className="absolute top-[50%] translate-y-[-50%] left-[16px]">
                            {leading}
                        </div>
                    )
                }
                <input
                    type={type}
                    className={cn(
                        "h-[48px] rounded-[8px] block w-full border-gray-light border-[1px] hover:border-primary bg-white pl-[17.75px] pr-[17.75px] outline-primary-alt hover:shadow-[0px_0px_32px_0px_#633CFF40]",
                        leading && "pl-[37px]",
                        error && "border-red",
                        className,
                    )}
                    ref={reference}
                    {...properties}
                />
                {
                    error && (
                        <div className="absolute top-[50%] translate-y-[-50%] right-[16px] text-[12px] text-red">
                            {error}
                        </div>
                    )
                }
            </div>
        );
    },
);

Input.displayName = "Input";

export { Input };
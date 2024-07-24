"use client";

import { cn } from "@/lib/utils";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import * as React from "react";

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

interface SelectTriggerProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> {
  icon?: React.ReactElement;
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, icon, ...properties }, reference) => (
  <SelectPrimitive.Trigger
    ref={reference}
    className={cn(
      "flex h-[48px] w-full items-center justify-between rounded-[8px] border-[1px] border-[#D9D9D9] bg-white px-[16px] py-[16px] text-[16px] ring-offset-background placeholder:text-muted-foreground focus:outline-none disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1 hover:shadow-[0px_0px_32px_0px_#633CFF40] focus:border-primary text-gray",
      className
    )}
    {...properties}
  >
    <div className="flex items-center gap-[12px]">
      <div className="grid place-items-center h-[16px] w-[16px]">
        {icon}
      </div>
      {children}
    </div>
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-5 w-5 text-primary" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...properties }, reference) => (
  <SelectPrimitive.ScrollUpButton
    ref={reference}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...properties}
  >
    <ChevronUp className="h-5 w-5 text-primary" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...properties }, reference) => (
  <SelectPrimitive.ScrollDownButton
    ref={reference}
    className={cn(
      "flex cursor-default items-center justify-center py-1",
      className,
    )}
    {...properties}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName =
  SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = "popper", ...properties }, reference) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={reference}
      className={cn(
        "relative z-50 shadow-[0px_0px_32px_0px_#0000001A] max-h-96 min-w-[8rem] overflow-hidden rounded-[8px] border-[1px] border-[#D9D9D9] bg-whitesmoke text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
        position === "popper" &&
        "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
        className,
      )}
      position={position}
      {...properties}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          "p-1",
          position === "popper" &&
          "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]",
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...properties }, reference) => (
  <SelectPrimitive.Label
    ref={reference}
    className={cn("py-1.5 pl-8 pr-2 text-sm font-semibold", className)}
    {...properties}
  />
));

SelectLabel.displayName = SelectPrimitive.Label.displayName;

interface SelectItemProps extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> {
  icon?: React.ReactElement;
}

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  SelectItemProps
>(({ className, children, icon, ...properties }, reference) => (
  <SelectPrimitive.Item
    ref={reference}
    className={cn(
      "relative w-full cursor-default select-none items-center rounded-sm px-[16px] outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className,
    )}
    {...properties}
  >
    <div className="flex items-center py-[12px] w-full">
      <span className="grid place-items-center h-[16px] w-[16px] mr-[12px]">
        {icon}
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </div>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...properties }, reference) => (
  <SelectPrimitive.Separator
    ref={reference}
    className={cn("mx-4 h-[1px] bg-[#D9D9D9]", className)}
    {...properties}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
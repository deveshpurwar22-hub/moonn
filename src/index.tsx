import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { Slot } from '@radix-ui/react-slot';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export const Button = React.forwardRef<HTMLButtonElement, React.ButtonHTMLAttributes<HTMLButtonElement> & { asChild?: boolean, variant?: 'default' | 'outline' | 'secondary' | 'ghost', size?: 'default' | 'sm' | 'lg' | 'icon' }>(({ className = '', variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button";
  const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-[0.98]";
  
  const variants = {
    default: "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
    outline: "border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  const sizes = {
    default: "h-12 px-6 py-2",
    sm: "h-9 rounded-md px-4",
    lg: "h-14 rounded-xl px-10 text-base",
    icon: "h-10 w-10"
  };
  
  return (
    <Comp className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`} ref={ref} {...props} />
  );
});
Button.displayName = "Button";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(({ className = '', ...props }, ref) => {
  return (
    <input className={`flex h-12 w-full rounded-lg border border-input bg-white px-4 py-2 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm ${className}`} ref={ref} {...props} />
  );
});
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(({ className = '', ...props }, ref) => {
  return (
    <textarea className={`flex min-h-[120px] w-full rounded-lg border border-input bg-white px-4 py-3 text-base shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-1 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 md:text-sm resize-y ${className}`} ref={ref} {...props} />
  );
});
Textarea.displayName = "Textarea";

export const Label = React.forwardRef<HTMLLabelElement, React.LabelHTMLAttributes<HTMLLabelElement>>(({ className = '', ...props }, ref) => (
  <label ref={ref} className={`text-sm font-semibold leading-none text-foreground/90 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`} {...props} />
));
Label.displayName = "Label";

export const Accordion = AccordionPrimitive.Root;

export const AccordionItem = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Item>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>>(({ className = '', ...props }, ref) => (
  <AccordionPrimitive.Item ref={ref} className={`border border-border rounded-xl px-5 bg-white shadow-sm mb-4 last:mb-0 overflow-hidden ${className}`} {...props} />
));
AccordionItem.displayName = "AccordionItem";

export const AccordionTrigger = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Trigger>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>>(({ className = '', children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger ref={ref} className={`flex flex-1 items-center justify-between py-5 text-left text-base font-semibold transition-all hover:text-primary [&[data-state=open]>svg]:rotate-180 ${className}`} {...props}>
      {children}
      <ChevronDown className="h-5 w-5 shrink-0 text-muted-foreground transition-transform duration-300" />
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
));
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

export const AccordionContent = React.forwardRef<React.ElementRef<typeof AccordionPrimitive.Content>, React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>>(({ className = '', children, ...props }, ref) => (
  <AccordionPrimitive.Content ref={ref} className="overflow-hidden text-base data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down" {...props}>
    <div className={`pb-5 pt-0 text-muted-foreground leading-relaxed ${className}`}>{children}</div>
  </AccordionPrimitive.Content>
));
AccordionContent.displayName = AccordionPrimitive.Content.displayName;

export function AnimatedCounter({ value, decimals = 0 }: { value: number; decimals?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const factor = 10 ** decimals;

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const end = value;
    const duration = 2000;
    const incrementTime = 30;
    const step = (end / duration) * incrementTime;

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.round(start * factor) / factor);
      }
    }, incrementTime);
    return () => clearInterval(timer);
  }, [value, inView, factor]);

  return <span ref={ref}>{decimals > 0 ? count.toFixed(decimals) : count}</span>;
}

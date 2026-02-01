import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import type * as React from 'react';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ring-offset-sand-50',
  {
    variants: {
      variant: {
        default: 'bg-pine-900 text-sand-50 hover:bg-pine-800 shadow-lg shadow-pine-900/20',
        outline: 'border border-pine-900/20 text-pine-900 hover:bg-pine-900 hover:text-sand-50',
        ghost: 'text-pine-900 hover:bg-sand-200/70',
      },
      size: {
        default: 'h-11 px-6',
        lg: 'h-12 px-8 text-base',
        sm: 'h-9 px-4 text-xs',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button';
  return <Comp className={cn(buttonVariants({ variant, size, className }))} {...props} />;
}

Button.displayName = 'Button';

export { Button, buttonVariants };

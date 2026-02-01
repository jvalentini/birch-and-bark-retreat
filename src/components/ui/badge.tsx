import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const badgeVariants = cva(
  'inline-flex items-center rounded-full border border-transparent px-3 py-1 text-xs font-semibold uppercase tracking-[0.3em]',
  {
    variants: {
      variant: {
        default: 'bg-sand-200/80 text-pine-700',
        accent: 'bg-ember-500/20 text-ember-600 border-ember-500/40',
        forest: 'bg-pine-900 text-sand-50',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

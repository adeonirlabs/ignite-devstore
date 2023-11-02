import type { ComponentProps } from 'react'

import { cn } from '~/utils/classnames'

export function Skeleton({ className, ...props }: ComponentProps<'div'>) {
  return <div className={cn('animate-pulse rounded-md bg-zinc-50/10', className)} {...props} />
}

import { Skeleton } from '~/components/skeleton'

export default function Loading() {
  return (
    <div className="h-215 grid grid-cols-3 grid-rows-2 gap-6">
      <Skeleton className="col-span-2 row-span-2 h-full rounded-lg" />
      <Skeleton className="rounded-lg" />
      <Skeleton className="rounded-lg" />
    </div>
  )
}

import { Skeleton } from '~/components/skeleton'

export default function Loading() {
  return (
    <div className="2xl:h-215 grid max-h-215 grid-cols-3 grid-rows-2 gap-6">
      <Skeleton className="col-span-2 row-span-2 aspect-square h-full rounded-lg 2xl:aspect-auto" />
      <Skeleton className="aspect-square rounded-lg 2xl:aspect-auto" />
      <Skeleton className="aspect-square rounded-lg 2xl:aspect-auto" />
    </div>
  )
}

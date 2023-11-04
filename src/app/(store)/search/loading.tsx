/* eslint-disable react/no-array-index-key */
'use client'

import { useSearchParams } from 'next/navigation'

import { Skeleton } from '~/components/skeleton'

export default function Loading() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm">
        Search: <span className="font-semibold">{query || ''}</span>
      </p>

      <div className="grid max-h-215 grid-cols-3 grid-rows-2 gap-6 2xl:h-215">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton className="aspect-square rounded-lg 2xl:aspect-auto" key={index} />
        ))}
      </div>
    </section>
  )
}

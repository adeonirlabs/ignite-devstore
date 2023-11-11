/* eslint-disable react/no-array-index-key */
import { Suspense } from 'react'

import { SearchQuery } from './search'

import { Skeleton } from '~/components/skeleton'

export default function Loading() {
  return (
    <section className="flex flex-col gap-4">
      <Suspense fallback={null}>
        <SearchQuery />
      </Suspense>

      <div className="grid max-h-215 grid-cols-3 grid-rows-2 gap-6 2xl:h-215">
        {Array.from({ length: 6 }).map((_, index) => (
          <Skeleton className="aspect-square rounded-lg 2xl:aspect-auto" key={index} />
        ))}
      </div>
    </section>
  )
}

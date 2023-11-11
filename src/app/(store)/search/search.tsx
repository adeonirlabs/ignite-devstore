'use client'

import { useSearchParams } from 'next/navigation'

export function SearchQuery() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')

  return (
    <p className="text-sm">
      Search: <span className="font-semibold">{query || ''}</span>
    </p>
  )
}

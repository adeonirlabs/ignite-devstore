'use client'

import { Search } from 'lucide-react'
import { useRouter, useSearchParams } from 'next/navigation'
import type { FormEvent } from 'react'

export function SearchForm() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const query = searchParams.get('q')

  function handleSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const q = formData.get('q') as string

    if (!q) return

    router.push(`/search?q=${q}`)
  }

  return (
    <form
      className="flex w-80 items-center gap-3 rounded-full bg-zinc-900 px-4 py-2 ring-2 ring-zinc-700"
      onSubmit={handleSearch}
    >
      <Search className="h-5 w-5 text-zinc-500" />
      <input
        className="w-full bg-transparent text-sm placeholder:text-zinc-500 focus:outline-none"
        defaultValue={query || ''}
        name="q"
        placeholder="Buscar produtos"
      />
    </form>
  )
}

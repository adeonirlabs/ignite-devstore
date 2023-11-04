import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'

import type { Product } from '~/schemas/products'
import { productSchema } from '~/schemas/products'
import { api } from '~/utils/api'
import { currency } from '~/utils/format'

interface SearchProps {
  searchParams: {
    q: string
  }
}

async function getData(query: string): Promise<Product[]> {
  const response = await api(`products/search?q=${query}`)
  const result: Product[] = await response.json()

  return result
}

export default async function Page({ searchParams }: SearchProps) {
  const { q: query } = searchParams

  if (!query) {
    redirect('/')
  }

  const response = await getData(query)
  const parsed = productSchema.array().safeParse(response)

  if (!parsed.success) {
    throw new Error('Erro ao carregar produtos')
  }

  const products = parsed.data

  return (
    <section className="flex flex-col gap-4">
      <p className="text-sm">
        Search: <span className="font-semibold">{query}</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        {products.map((item) => (
          <Link
            className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
            href={`/product/${item.slug}`}
            key={item.id}
          >
            <Image
              alt=""
              className="transition-transform group-hover:scale-105"
              height={420}
              priority
              quality={100}
              src={`/assets/${item.image}`}
              width={420}
            />
            <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
              <span className="truncate text-sm">{item.title}</span>
              <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
                {currency(item.price)}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

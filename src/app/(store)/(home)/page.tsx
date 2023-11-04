import Image from 'next/image'
import Link from 'next/link'

import type { Product } from '~/schemas/products'
import { productSchema } from '~/schemas/products'
import { api } from '~/utils/api'
import { currency } from '~/utils/format'

async function getData(): Promise<Product[]> {
  const response = await api('products/featured')
  const result: Product[] = await response.json()

  return result
}

export default async function Page() {
  const response = await getData()

  const parsed = productSchema.array().safeParse(response)

  if (!parsed.success) {
    throw new Error('Erro ao carregar produtos')
  }

  const [highlight, ...others] = parsed.data

  return (
    <section className="grid max-h-215 grid-cols-3 grid-rows-2 gap-6">
      <Link
        className="group relative col-span-2 row-span-2 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
        href={`/product/${highlight.slug}`}
      >
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={860}
          priority
          quality={100}
          src={`/assets/${highlight.image}`}
          width={860}
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-72 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
          <span className="truncate">{highlight.title}</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 font-semibold">
            {currency(highlight.price)}
          </span>
        </div>
      </Link>
      {others.map((item) => (
        <Link
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          href={`/product/${item.slug}`}
          key={item.id}
        >
          <Image
            alt=""
            className="transition-transform group-hover:scale-105"
            height={430}
            priority
            quality={100}
            src={`/assets/${item.image}`}
            width={430}
          />
          <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
            <span className="truncate text-sm">{item.title}</span>
            <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
              {currency(item.price)}
            </span>
          </div>
        </Link>
      ))}
    </section>
  )
}

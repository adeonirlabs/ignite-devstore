import type { Metadata } from 'next'
import Image from 'next/image'

import type { Product } from '~/schemas/products'
import { productSchema } from '~/schemas/products'
import { api } from '~/utils/api'
import { currency } from '~/utils/format'

export interface PageProps {
  params: {
    slug: string
  }
}

async function getData(slug: string): Promise<Product> {
  const response = await api(`products/${slug}`)
  const result: Product = await response.json()

  return result
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getData(params.slug)

  return {
    title: product.title,
  }
}

export default async function Page({ params }: PageProps) {
  const response = await getData(params.slug)

  const parsed = productSchema.safeParse(response)

  if (!parsed.success) {
    throw new Error('Erro ao carregar produtos')
  }

  const product = parsed.data

  return (
    <article className="relative grid max-h-215 grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image alt="" height={1024} priority quality={100} src={`/assets/${product.image}`} width={1024} />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">{product.title}</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">{product.description}</p>

        <div className="mt-8 flex flex-col items-start gap-2">
          <span className="inline-block whitespace-nowrap rounded-full bg-violet-500 px-4 py-1.5 font-semibold">
            {currency(product.price)}
          </span>
          <span className="text-xs text-zinc-400">Em até 10x s/juros de R$ {currency(product.price / 10, true)}</span>
        </div>

        <div className="mt-8 space-y-4">
          <span className="block font-semibold">Tamanhos</span>
          <div className="flex gap-3">
            <button
              className="flex h-8 w-14 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold ring-2 ring-zinc-700"
              type="button"
            >
              P
            </button>
            <button
              className="flex h-8 w-14 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold ring-2 ring-zinc-700"
              type="button"
            >
              M
            </button>
            <button
              className="flex h-8 w-14 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold ring-2 ring-zinc-700"
              type="button"
            >
              G
            </button>
            <button
              className="flex h-8 w-14 items-center justify-center rounded-full bg-zinc-800 text-sm font-semibold ring-2 ring-zinc-700"
              type="button"
            >
              GG
            </button>
          </div>
        </div>

        <button
          className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
          type="button"
        >
          Adicionar à cesta
        </button>
      </div>
    </article>
  )
}

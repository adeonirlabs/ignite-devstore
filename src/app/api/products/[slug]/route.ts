import { z } from 'zod'

import data from '../data.json'

export interface GetProps {
  params: {
    slug: string
  }
}

export async function GET(_: Request, { params }: GetProps) {
  await new Promise((resolve) => {
    setTimeout(resolve, 500)
  })

  const slug = z.string().parse(params.slug)
  const product = data.products.find((p) => p.slug === slug)

  if (!product) {
    return Response.json({ message: 'Produto não encontrado' }, { status: 400 })
  }

  return Response.json(product)
}

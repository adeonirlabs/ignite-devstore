/* eslint-disable @next/next/no-img-element */
import { ImageResponse } from 'next/og'
import colors from 'tailwindcss/colors'

import { env } from '~/env'
import type { Product } from '~/schemas/products'
import { api } from '~/utils/api'

export const runtime = 'edge'

export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

async function getData(slug: string): Promise<Product> {
  const response = await api(`products/${slug}`)
  const result: Product = await response.json()

  return result
}

export default async function Image({ params }: { params: { slug: string } }) {
  const product = await getData(params.slug)

  const url = new URL(`assets/${product.image}`, env.APP_URL).toString()

  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: colors.zinc[950],
          color: colors.zinc[50],
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <img alt="" src={url} style={{ width: '100%' }} />
      </div>
    ),
    {
      ...size,
    },
  )
}

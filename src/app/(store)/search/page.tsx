import Image from 'next/image'
import Link from 'next/link'

import { currency } from '~/utils/format'

export default function Page() {
  return (
    <section className="flex max-h-215 flex-col gap-4">
      <p className="text-sm">
        Search: <span className="font-semibold">motelom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          href="/product/never-stop-learning"
        >
          <Image
            alt=""
            className="transition-transform group-hover:scale-105"
            height={430}
            priority
            quality={100}
            src="/assets/moletom-never-stop-learning.png"
            width={430}
          />
          <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
            <span className="truncate text-sm">Moletom</span>
            <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
              {currency(129)}
            </span>
          </div>
        </Link>
        <Link
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          href="/product/moletom-never-stop-learning"
        >
          <Image
            alt=""
            className="transition-transform group-hover:scale-105"
            height={430}
            priority
            quality={100}
            src="/assets/moletom-never-stop-learning.png"
            width={430}
          />
          <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
            <span className="truncate text-sm">Moletom</span>
            <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
              {currency(129)}
            </span>
          </div>
        </Link>
        <Link
          className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
          href="/product/never-stop-learning"
        >
          <Image
            alt=""
            className="transition-transform group-hover:scale-105"
            height={430}
            priority
            quality={100}
            src="/assets/moletom-never-stop-learning.png"
            width={430}
          />
          <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
            <span className="truncate text-sm">Moletom</span>
            <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
              {currency(129)}
            </span>
          </div>
        </Link>
      </div>
    </section>
  )
}

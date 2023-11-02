import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="grid max-h-215 grid-cols-3 grid-rows-2 gap-6">
      <Link
        className="group relative col-span-2 row-span-2 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
        href="/"
      >
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={860}
          quality={100}
          src="/assets/moletom-ai-side.png"
          width={860}
        />
        <div className="absolute bottom-28 right-28 flex h-12 max-w-72 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
          <span className="truncate">Moletom AI Side</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
      <Link className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900" href="/">
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={430}
          quality={100}
          src="/assets/moletom-ia-p-devs.png"
          width={430}
        />
        <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
          <span className="truncate text-sm">Moletom IA para Devs</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
      <Link className="group relative flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900" href="/">
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={430}
          quality={100}
          src="/assets/moletom-never-stop-learning.png"
          width={430}
        />
        <div className="absolute bottom-12 right-12 flex h-10 max-w-64 items-center gap-2 rounded-full bg-black/70 p-0.5 pl-5 ring-2 ring-zinc-500">
          <span className="truncate text-sm">Moletom Never Stop Learning</span>
          <span className="flex h-full items-center justify-center whitespace-nowrap rounded-full bg-violet-500 px-4 text-sm font-semibold">
            R$ 129
          </span>
        </div>
      </Link>
    </div>
  )
}

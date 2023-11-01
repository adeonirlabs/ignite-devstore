import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="max-h-215 grid-rows-2 grid grid-cols-3 gap-6">
      <Link
        className="group col-span-2 row-span-2 flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900"
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
      </Link>
      <Link className="group flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900" href="/">
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={430}
          quality={100}
          src="/assets/moletom-ia-p-devs.png"
          width={430}
        />
      </Link>
      <Link className="group flex items-end justify-center overflow-hidden rounded-lg bg-zinc-900" href="/">
        <Image
          alt=""
          className="transition-transform group-hover:scale-105"
          height={430}
          quality={100}
          src="/assets/moletom-never-stop-learning.png"
          width={430}
        />
      </Link>
    </div>
  )
}

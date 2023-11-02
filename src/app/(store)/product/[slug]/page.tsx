import Image from 'next/image'

export interface PageProps {
  params: {
    slug: string
  }
}

export default function Page({ params }: PageProps) {
  const { slug } = params

  console.info(slug)

  return (
    <article className="relative grid max-h-215 grid-cols-3">
      <div className="col-span-2 overflow-hidden">
        <Image alt="" height={1024} priority quality={100} src="/assets/moletom-never-stop-learning.png" width={1024} />
      </div>

      <div className="flex flex-col justify-center px-12">
        <h1 className="text-3xl font-bold leading-tight">Moleton</h1>
        <p className="mt-2 leading-relaxed text-zinc-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, reprehenderit!
        </p>

        <div className="mt-8 flex flex-col items-start gap-2">
          <span className="inline-block whitespace-nowrap rounded-full bg-violet-500 px-4 py-1.5 font-semibold">
            R$ 129
          </span>
          <span className="text-xs text-zinc-400">Em até 10x s/juros de R$ 10,75</span>
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

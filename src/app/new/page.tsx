import type { JSX } from "react"

const NewPortfolioPage = (): JSX.Element => {
  return (
    <main className="grid min-h-screen place-items-center bg-stone-50 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:32px_32px] p-6">
      <section
        aria-label="Portfolio card canvas"
        className="relative aspect-video w-full max-w-[720px] rounded-[34px] bg-stone-50"
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 720 405"
          preserveAspectRatio="none"
          className="absolute inset-0 size-full overflow-visible"
        >
          <rect
            x="2"
            y="2"
            width="716"
            height="401"
            rx="32"
            vectorEffect="non-scaling-stroke"
            className="fill-none stroke-black stroke-[3] [stroke-dasharray:20_11] [stroke-linecap:round]"
          />
        </svg>
      </section>
    </main>
  )
}

export default NewPortfolioPage

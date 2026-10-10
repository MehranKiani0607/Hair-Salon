function ArrowRight() {
  return (
    <svg
      width="16"
      height="10"
      viewBox="0 0 16 10"
      fill="none"
      aria-hidden="true"
      className="transition-transform duration-300 group-hover:translate-x-1"
    >
      <path
        d="M0 5h14M10 1l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="square"
      />
    </svg>
  )
}

export default function About() {
  return (
    <section id="apropos" className="relative overflow-hidden border-t border-ink/10">
      {/* Faint oversized watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-6 top-6 select-none font-serif text-[9rem] leading-none text-ink/[0.045] sm:text-[14rem] lg:-right-4 lg:text-[20rem]"
      >
        N°27
      </span>

      <div className="relative mx-auto grid max-w-[1700px] grid-cols-1 lg:grid-cols-2">
        <div className="order-1">
          <img
            src="/images/salon.jpg"
            alt="Intérieur de l'atelier : fauteuils en cuir noir et miroirs ronds rétroéclairés"
            className="editorial-img h-[58vh] w-full object-cover lg:h-full lg:min-h-[700px]"
          />
        </div>

        <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-12 lg:px-16 lg:py-24 xl:px-24">
          <p className="label">Atelier N°27</p>

          <h2 className="mt-6 font-serif text-3xl leading-tight sm:text-4xl xl:text-[3.25rem]">
            Un lieu où l&rsquo;élégance
            <br className="hidden sm:block" /> rencontre l&rsquo;expertise.
          </h2>

          <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/70">
            Dans un cadre épuré et raffiné, nous créons pour chaque coupe une expérience unique qui
            vous ressemble.
          </p>

          <a href="#collection" className="btn-link group mt-10 self-start">
            Découvrir l&rsquo;atelier
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}

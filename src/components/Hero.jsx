export default function Hero() {
  return (
    <section id="accueil" className="grid grid-cols-1 lg:grid-cols-2">
      <div className="order-2 flex flex-col justify-center px-6 py-16 sm:px-12 lg:order-1 lg:px-16 lg:py-24 xl:px-24">
        <p className="label">L&rsquo;art de sublimer</p>

        <h1 className="mt-6 font-serif text-[2.7rem] leading-[1.06] sm:text-6xl xl:text-[4.5rem]">
          Votre style,
          <br />
          <span className="italic">notre signature.</span>
        </h1>

        <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/70">
          Chaque coupe est pensée pour révéler votre personnalité et affirmer votre élégance.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-5">
          <a href="#contact" className="btn-primary">
            Réserver en ligne
          </a>
          <a href="#apropos" className="btn-link">
            Découvrir l&rsquo;atelier
          </a>
        </div>
      </div>

      <div className="order-1 lg:order-2">
        <img
          src="/images/hero.jpg"
          alt="Portrait éditorial en noir et blanc, coupe signature Atelier N°27"
          className="editorial-img h-[58vh] w-full object-cover object-center lg:h-full lg:min-h-[780px]"
        />
      </div>
    </section>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-ink/10 bg-cream-deep">
      <div className="mx-auto grid max-w-[1700px] grid-cols-1 gap-12 px-6 py-16 sm:px-12 lg:grid-cols-4 lg:px-16">
        <div className="lg:col-span-2">
          <p className="font-serif text-2xl uppercase tracking-[0.12em]">Atelier N°27</p>
          <p className="mt-5 max-w-sm text-[15px] leading-relaxed text-ink/70">
            Salon de coiffure haut de gamme. Sur rendez-vous, du mardi au samedi.
          </p>
        </div>

        <div>
          <p className="label">Adresse</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
            27 rue Saint-Honoré
            <br />
            75001 Paris
          </p>
        </div>

        <div>
          <p className="label">Contact</p>
          <p className="mt-5 text-[15px] leading-relaxed text-ink/70">
            bonjour@atelier27.fr
            <br />
            +33 1 42 60 27 27
          </p>
        </div>
      </div>

      <div className="border-t border-ink/10">
        <div className="mx-auto flex max-w-[1700px] flex-col gap-3 px-6 py-6 text-[11px] uppercase tracking-[0.2em] text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-12 lg:px-16">
          <span>© {new Date().getFullYear()} Atelier N°27</span>
          <span>Paris — France</span>
        </div>
      </div>
    </footer>
  )
}

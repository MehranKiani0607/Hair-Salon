import { useEffect, useState } from 'react'
import { navItems } from '../data/site'

export default function Header() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-cream/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-[1700px] items-center justify-between px-6 py-5 lg:px-12">
        <a
          href="#accueil"
          className="font-serif text-lg font-bold uppercase tracking-[0.12em] text-ink lg:text-xl"
        >
          Atelier N°27
        </a>

        <nav className="hidden items-center gap-9 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="group relative text-[11px] uppercase tracking-[0.22em] text-ink/70 transition-colors duration-300 hover:text-ink"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-ink transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-5">
          <a href="#contact" className="btn-primary hidden !px-7 !py-3.5 sm:inline-flex">
            Réserver
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Ouvrir le menu"
            className="flex flex-col gap-[5px] p-1"
          >
            <span className="block h-px w-6 bg-ink" />
            <span className="block h-px w-6 bg-ink" />
            <span className="block h-px w-6 bg-ink" />
          </button>
        </div>
      </div>

      {/* Full-screen menu */}
      <div
        className={`fixed inset-0 z-[60] bg-cream transition-opacity duration-500 ${
          open ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div className="flex items-center justify-between border-b border-ink/10 px-6 py-5 lg:px-12">
          <span className="font-serif text-lg font-bold uppercase tracking-[0.12em]">
            Atelier N°27
          </span>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Fermer le menu"
            className="relative h-6 w-6"
          >
            <span className="absolute left-0 top-1/2 block h-px w-6 rotate-45 bg-ink" />
            <span className="absolute left-0 top-1/2 block h-px w-6 -rotate-45 bg-ink" />
          </button>
        </div>

        <nav className="flex h-[calc(100%-81px)] flex-col items-center justify-center gap-7">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="font-serif text-3xl uppercase tracking-[0.08em] transition-opacity duration-300 hover:opacity-60 sm:text-4xl"
            >
              {item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setOpen(false)} className="btn-primary mt-6">
            Réserver
          </a>
        </nav>
      </div>
    </header>
  )
}

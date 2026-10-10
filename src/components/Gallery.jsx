import { galleryPhotos } from '../data/site'

export default function Gallery() {
  return (
    <section id="collection" className="relative border-t border-ink/10">
      <span id="lookbook" className="absolute -top-24 block h-0 w-0" aria-hidden="true" />

      <div className="grid grid-cols-2 lg:grid-cols-4">
        {galleryPhotos.map((photo) => (
          <figure key={photo.src} className="group relative aspect-square overflow-hidden">
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="editorial-img h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
            />
          </figure>
        ))}
      </div>
    </section>
  )
}

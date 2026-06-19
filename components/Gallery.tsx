import { gallery } from "../content";

export function Gallery() {
  return (
    <section id="gallery" className="px-6 py-24">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold">{gallery.heading}</h2>
        <p className="mt-3 text-lg text-ink/65">{gallery.intro}</p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          {gallery.photos.map((photo, i) => (
            <img
              key={i}
              src={photo.src}
              alt={photo.alt}
              className="rounded-2xl w-full aspect-square object-cover"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

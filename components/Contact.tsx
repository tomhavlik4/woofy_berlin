import { contact } from "../content";

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          {contact.heading}
        </h2>
        <p className="text-lg text-ink/70 max-w-2xl leading-relaxed mb-10">
          {contact.body}
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50">
              Email
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="block text-lg text-accent hover:underline"
            >
              {contact.email}
            </a>
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50 pt-4">
              WhatsApp
            </p>
            <a
              href={contact.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg text-accent hover:underline"
            >
              <svg
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
                aria-hidden="true"
              >
                <path d="M16 3C9.4 3 4 8.4 4 15c0 2.1.6 4.2 1.6 6L4 29l8.2-1.6c1.7.9 3.7 1.4 5.8 1.4 6.6 0 12-5.4 12-12S22.6 3 16 3zm0 21.9c-1.8 0-3.6-.5-5.1-1.4l-.4-.2-4.9.9.9-4.8-.2-.4C5.4 18.4 5 16.7 5 15c0-6.1 4.9-11 11-11s11 4.9 11 11-4.9 9.9-11 9.9zm6-7.4c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.8.2-.2.3-.9 1.1-1.1 1.3-.2.2-.4.2-.7.1-1.8-.9-3-1.6-4.2-3.6-.3-.5.3-.5.9-1.6.1-.2 0-.4 0-.6 0-.2-.8-1.9-1.1-2.6-.3-.7-.6-.6-.8-.6h-.7c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.3 1.4 3.5c.2.2 2.5 3.8 6 5.3 2.2.9 3 1 4.1.9.7-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
              </svg>
              {contact.whatsapp}
            </a>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50">
              Hours
            </p>
            <p className="text-lg">{contact.hours}</p>
            <p className="text-sm font-medium uppercase tracking-wider text-ink/50 pt-4">
              Studio
            </p>
            <p className="text-lg">{contact.address}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// ────────────────────────────────────────────────────────────────
// EDIT THIS FILE TO PERSONALIZE YOUR LANDING PAGE
// Almost every text change you'll want to make lives here.
// You don't need to touch the components. They read from this file.
// ────────────────────────────────────────────────────────────────

export const business = {
  name: "Woofy Berlin",
  shortName: "Woofy",
  tagline: "Walks, play, and daycare for happy Berlin dogs.",
};

export const nav = {
  links: [
    { label: "Services", href: "#services" },
    { label: "How it works", href: "#how" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  ctaLabel: "Book a walk",
  ctaHref: "#contact",
};

export const hero = {
  eyebrow: "Berlin · dog walking & daycare",
  heading: "Your dog's best day, every day.",
  subheading:
    "We walk, play with, and look after Berlin's dogs while you're at work. Small groups, vetted walkers, and a photo update after every visit, so you always know your dog is in good hands.",
  ctaPrimary: { label: "Book a walk", href: "#contact" },
  ctaSecondary: { label: "See our services", href: "#services" },
};

export const services = {
  heading: "What we do",
  intro:
    "Three ways to keep your dog happy and tired.",
  items: [
    {
      icon: "🐕",
      title: "Group dog walks",
      summary:
        "Small, well-matched groups of up to four dogs, walked for a full hour in Berlin's parks and green spaces. Pickup and drop-off from your door, with a photo update every time.",
    },
    {
      icon: "🏡",
      title: "Doggy daycare",
      summary:
        "A full day of play, rest, and company at our supervised daycare. Perfect for social dogs who'd rather not spend the day home alone. Drop off on your way to work, collect in the evening.",
    },
    {
      icon: "🐾",
      title: "Solo walks & home visits",
      summary:
        "One-on-one walks for puppies, seniors, or dogs who prefer their own pace. We also do daytime home visits for feeding, fresh water, and a bit of company.",
    },
  ],
};

// Photos shown in the Hero and the Gallery section.
// These are placeholder dog photos. Replace the `src` values with your own
// Woofy Berlin pictures when you have them (e.g. put files in `public/` and
// use "/my-photo.jpg", or paste an image URL).
export const gallery = {
  heading: "Out and about with Woofy",
  intro: "A few of our regulars enjoying their walks and daycare days.",
  heroImage: {
    src: "https://placedog.net/900/1000?id=7",
    alt: "A happy dog out on a walk with a Woofy Berlin walker",
  },
  photos: [
    { src: "/doggo1.png", alt: "A Woofy Berlin dog out on a walk" },
    { src: "/doggo2.png", alt: "A Woofy Berlin dog out on a walk" },
    { src: "/doggo3.png", alt: "A Woofy Berlin dog out on a walk" },
    { src: "/doggo4.png", alt: "A Woofy Berlin dog out on a walk" },
    { src: "/doggo5.png", alt: "A Woofy Berlin dog out on a walk" },
    { src: "/doggo6.png", alt: "A Woofy Berlin dog out on a walk" },
  ],
};

export const howItWorks = {
  heading: "How it works",
  steps: [
    {
      title: "Tell us about your dog",
      summary:
        "Send us a message with your dog's name, breed, age, and routine. We'll find the right walker and group for their energy and temperament.",
    },
    {
      title: "We meet first",
      summary:
        "Every new dog gets a free meet-and-greet so we can say hello, get your keys sorted, and make sure it's a good fit, with no pressure either way.",
    },
    {
      title: "We walk, you relax",
      summary:
        "Book one-off walks or a regular weekly schedule. After every visit you get a photo and a quick note on how your dog did.",
    },
  ],
};

export const benefits = {
  heading: "Why Woofy",
  items: [
    {
      title: "Small groups, never crowds",
      summary:
        "Maximum four dogs per walker, matched by size and temperament. Your dog gets real attention, not lost in a pack of fifteen.",
    },
    {
      title: "Walkers you can trust",
      summary:
        "Every walker is insured, first-aid trained, and personally vetted by us. The same familiar face turns up for your dog each time.",
    },
    {
      title: "A photo after every visit",
      summary:
        "You'll get a picture and a short update after each walk or daycare day. You always know exactly how your dog's day went.",
    },
    {
      title: "Eco-friendly toys & snacks",
      summary:
        "Every doggo gets eco-friendly toys to play with and natural, sustainably-sourced snacks on the walk, which is better for your dog and kinder to the planet.",
    },
  ],
};

export const testimonials = {
  heading: "What dog parents say",
  quotes: [
    {
      text:
        "Our spaniel Otto comes home happily exhausted every single time. The daily photos are the highlight of my workday, and I never worry about him anymore.",
      author: "Mara Lindqvist",
      role: "Otto's human, Prenzlauer Berg",
      image: {
        src: "https://randomuser.me/api/portraits/women/68.jpg",
        alt: "Portrait of Mara Lindqvist",
      },
    },
    {
      text:
        "We were nervous about leaving our rescue with anyone, but Woofy took it slow and earned her trust. She now pulls toward the door when she sees her walker arrive.",
      author: "Jonas Weber",
      role: "Frida's human, Friedrichshain",
      image: {
        src: "https://randomuser.me/api/portraits/men/32.jpg",
        alt: "Portrait of Jonas Weber",
      },
    },
    {
      text:
        "I work long shifts and used to feel guilty leaving Bruno home alone. Now he gets a proper hour outside with his friends, and the walker brings him home dried off when it rains. Total peace of mind.",
      author: "Greta Hoffmann",
      role: "Bruno's human, Charlottenburg",
      image: {
        src: "https://randomuser.me/api/portraits/women/44.jpg",
        alt: "Portrait of Greta Hoffmann",
      },
    },
    {
      text:
        "Mochi is a nervous little guy, but the same walker comes every time and he's really blossomed. The eco-friendly treats are a lovely touch, and Mochi is completely obsessed with them.",
      author: "Lukas Vogel",
      role: "Mochi's human, Neukölln",
      image: {
        src: "https://randomuser.me/api/portraits/men/52.jpg",
        alt: "Portrait of Lukas Vogel",
      },
    },
  ],
};

export const faq = {
  heading: "Common questions",
  items: [
    {
      q: "Which parts of Berlin do you cover?",
      a: "We currently serve Prenzlauer Berg, Mitte, Kreuzberg, and Charlottenburg. If you're nearby, get in touch, because we're expanding and may be able to help.",
    },
    {
      q: "Is my dog too young or too old to join?",
      a: "Not at all. Puppies and senior dogs are welcome, and we'll usually suggest solo walks or home visits for them so the pace suits their needs.",
    },
    {
      q: "What happens if it rains?",
      a: "We walk in all weather (your dog still needs to go out!). We towel off muddy paws before bringing them home and can leave them with their own towel by the door.",
    },
    {
      q: "Do you offer regular weekly slots?",
      a: "Yes. Most of our clients book a fixed weekly schedule so they have the same walker and time each week. One-off and last-minute walks are available too, subject to space.",
    },
  ],
};

export const contact = {
  heading: "Get in touch",
  body:
    "Ready to book, or just have a question about your dog? Send us a message and we'll get back to you within one business day, and we'll set up a free meet-and-greet.",
  email: "walkme@woofy.com",
  whatsapp: "+420 776 884 942",
  whatsappUrl: "https://wa.me/420776884942",
  hours: "Mon–Fri · 07:00 to 19:00 CET",
  address: "Adenauer Platz, Berlin-Charlottenburg",
};

export const meta = {
  title: "Woofy Berlin: Dog walking & daycare in Berlin",
  description:
    "Small-group dog walks, doggy daycare, and home visits across Berlin. Vetted walkers, a photo after every visit.",
};

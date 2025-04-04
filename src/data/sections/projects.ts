export interface ProjectItem {
  title: string;
  cover: string;
  description: string;
  services: ServiceType[];
}

export type ServiceType =
  | "SEO"
  | "Paid Ads"
  | "Reputation Management"
  | "Brand Architecture"
  | "Social Media"
  | "Content Production"
  | "Web Design";

export const projects: ProjectItem[] = [
  {
    title: "Newk’s Eatery",
    cover: "/2.gif",
    description:
      "Revitalized digital presence and brand identity for a growing fast-casual chain.",
    services: ["Brand Architecture", "Content Production", "Social Media"],
  },
  {
    title: "The Nelson Golf Club",
    cover: "/1.jpg",
    description:
      "Elevated the luxury golf brand through clean design and rich storytelling.",
    services: ["Web Design", "SEO", "Content Production"],
  },
  {
    title: "WWEX Logistics",
    cover: "/2.jpg",
    description:
      "A strategic brand overhaul for a national shipping powerhouse.",
    services: ["Reputation Management", "Web Design", "SEO"],
  },
  {
    title: "Low & Slow Snacks",
    cover: "/3.jpg",
    description:
      "Crafted smoky, bold visuals to match this snack brand's flavor profile.",
    services: ["Paid Ads", "Content Production", "Social Media"],
  },
  {
    title: "Senza Hotel",
    cover: "/1.gif",
    description:
      "A luxury hotel brand refresh focused on experience-first digital storytelling.",
    services: ["Web Design", "Brand Architecture", "SEO"],
  },
  {
    title: "Hempyz",
    cover: "/4.png",
    description:
      "Positioned this cannabis retail brand with cheeky creative and a bold voice.",
    services: ["Social Media", "Content Production", "Reputation Management"],
  },
  {
    title: "Mark Cuban Companies",
    cover: "/serviceFeat1.png",
    description:
      "Unified multiple brands under a clean, credible, investor-ready website.",
    services: ["Web Design", "SEO", "Brand Architecture"],
  },
  {
    title: "Catbird Neon",
    cover: "/5.jpg",
    description:
      "Gritty and vibrant digital campaign for an iconic neon studio.",
    services: ["Content Production", "Social Media", "Paid Ads"],
  },
  {
    title: "Cardboard Spaceship",
    cover: "/6.JPG",
    description:
      "A cutting-edge art agency gets a slick new visual system and portfolio site.",
    services: ["Web Design", "Brand Architecture", "SEO"],
  },
  {
    title: "D.RT Apparel",
    cover: "/serviceFeat2.png",
    description:
      "Modernized the online identity of this fashion-forward menswear brand.",
    services: ["Web Design", "Paid Ads", "Social Media"],
  },
];

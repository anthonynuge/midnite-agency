// data/navigation/services.ts

import {
  Share2,
  Video,
  Megaphone,
  Search,
  Laptop,
  Layers,
  ShieldCheck,
  LucideIcon,
} from "lucide-react";

export type ServiceMenuItem = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

export const servicesMenuItems: ServiceMenuItem[] = [
  {
    title: "Social Media",
    description: "Build, grow, and manage your presence online",
    href: "/services/social-media",
    icon: Share2,
  },
  {
    title: "Content Production",
    description: "Video, photo, and storytelling that converts",
    href: "/services/content",
    icon: Video,
  },
  {
    title: "Paid Ads",
    description: "Facebook, Google, TikTok – we run it all",
    href: "/services/ads",
    icon: Megaphone,
  },
  {
    title: "SEO",
    description: "Rank higher with technical + content-driven strategy",
    href: "/services/seo",
    icon: Search,
  },
  {
    title: "Web Design & Dev",
    description: "Custom-built sites that look stunning and sell hard",
    href: "/services/web",
    icon: Laptop,
  },
  {
    title: "Brand Architecture",
    description: "Clarify your identity and structure your messaging",
    href: "/services/brand",
    icon: Layers,
  },
  {
    title: "Reputation Management",
    description: "Protect and enhance your digital presence",
    href: "/services/reputation",
    icon: ShieldCheck,
  },
];

export type ServicePreviewCard = {
  title: string;
  description: string;
  image: string;
};

export const featuredServicesPreviews: ServicePreviewCard[] = [
  {
    title: "Web Design",
    description: "Responsive, fast, and totally on-brand",
    image: "/serviceFeat1.png",
  },
  {
    title: "Content Production",
    description: "Behind-the-scenes, reels, ads & more",
    image: "/serviceFeat2.png",
  },
];

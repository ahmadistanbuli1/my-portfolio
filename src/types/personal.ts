export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "gmail" | "twitter" | "website";
}

export interface JourneyMilestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  email: string;
  location?: string;
  socialLinks: SocialLink[];
  journey: JourneyMilestone[];
}

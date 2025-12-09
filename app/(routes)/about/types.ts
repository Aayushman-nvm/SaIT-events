export interface TeamInfo {
  title: string;
  tagline: string;
}

export interface TeamMember {
  NAME: string;
  ABOUT: string;
  ROLE: string;
  Image: string;
}

export interface ContributorData {
  login: string;
  avatar_url: string;
  html_url: string;
  contributions: number;
}

export interface Feature {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}
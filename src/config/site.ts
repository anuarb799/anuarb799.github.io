import { USER } from "@/features/portfolio/data/user";
import type { NavItem } from "@/types/nav";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || USER.website,
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV: NavItem[] = [
  // {
  //   title: "Sponsors",
  //   href: "/sponsors",
  // },
];

export const GITHUB_USERNAME = USER.username;
export const SOURCE_CODE_GITHUB_REPO = `${USER.username}/${process.env.APP_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") || "portfolio"}`;
export const SOURCE_CODE_GITHUB_URL = `https://github.com/${GITHUB_USERNAME}/${process.env.APP_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") || "portfolio"}`;

export const SPONSORSHIP_URL = `https://github.com/sponsors/${GITHUB_USERNAME}`;

export const UTM_PARAMS = {
  utm_source: process.env.APP_URL?.replace(/^https?:\/\//, "").replace(/\/$/, "") || "portfolio",
  utm_medium: "referral",
  utm_campaign: "portfolio",
};

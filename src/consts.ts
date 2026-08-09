import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ryan Liu",
  EMAIL: "ryanliu1140@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 0,
  NUM_WORKS_ON_HOMEPAGE: 0,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Portfolio of Ryan Liu, a Mechanical Engineering student at Northwestern University.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "...",
};

export const WORK: Metadata = {
  TITLE: "Work",
  DESCRIPTION: "...",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION: "A collection of my engineering projects.",
};

export const SOCIALS: Socials = [
  { 
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/ryan-liu-me",
  }
];

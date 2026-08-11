import type { Site, Metadata, Socials } from "@types";

export const SITE: Site = {
  NAME: "Ryan Liu",
  EMAIL: "ryanliu1140@gmail.com",
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Portfolio of Ryan Liu, a Mechanical Engineering student at Northwestern University.",
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

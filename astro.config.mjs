import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://rLiu1140.github.io",
  base: "/portfolio",
  integrations: [mdx(), sitemap(), tailwind()],
});
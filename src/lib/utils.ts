export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = (wordCount / 200 + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

/**
 * Swaps an element between the site's "active" and "inactive" text-color
 * states. Shared by the footer theme switcher and the project sort tabs so
 * the class lists live in one place.
 */
export function setToggleState(btn: HTMLElement | null, isActive: boolean) {
  if (!btn) return;

  const active = ["text-black", "dark:text-white"];
  const inactive = [
    "text-black/50",
    "dark:text-white/50",
    "hover:text-black",
    "dark:hover:text-white",
  ];

  btn.classList.remove(...(isActive ? inactive : active));
  btn.classList.add(...(isActive ? active : inactive));
}

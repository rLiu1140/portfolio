export function readingTime(html: string) {
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

/**
 * Toggles an element between the site's "active" and "inactive" text-color
 * state. Shared by the Footer theme switcher and the project sort tabs so
 * the class list only lives in one place.
 */
export function setToggleState(btn: HTMLElement | null, isActive: boolean) {
  const active = ["text-black", "dark:text-white"];
  const inactive = ["text-black/50", "dark:text-white/50", "hover:text-black", "hover:dark:text-white"];
  if (!btn) return;
  btn.classList.remove(...(isActive ? inactive : active));
  btn.classList.add(...(isActive ? active : inactive));
}

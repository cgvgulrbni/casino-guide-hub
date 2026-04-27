/**
 * Affiliate / play link used across the site.
 * REPLACE this URL with your real affiliate link before publishing.
 *
 * Example:
 *   export const PLAY_URL = "https://your-casino-affiliate-link.com/?ref=xxx";
 */
export const PLAY_URL = "#";
export const PLAY_LABEL = "Играть в казино";

/** Helper: true when the affiliate link is not configured yet. */
export const isPlayUrlConfigured = () =>
  typeof PLAY_URL === "string" && PLAY_URL.trim() !== "" && PLAY_URL.trim() !== "#";

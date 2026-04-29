import { base } from "$app/paths";
import type { PageLoad } from "./$types.js";

export const load = (async ({ fetch }) => {
  const posts = await (await fetch(`${base}/api/posts`)).json();

  return { posts };
}) satisfies PageLoad;

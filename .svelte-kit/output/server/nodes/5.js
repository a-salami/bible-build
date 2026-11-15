

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/memorize/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.BXHtX9P5.js","_app/immutable/chunks/e9Yf-h-2.js","_app/immutable/chunks/CUBzpAwE.js"];
export const stylesheets = ["_app/immutable/assets/5.BLWXh-wl.css"];
export const fonts = [];

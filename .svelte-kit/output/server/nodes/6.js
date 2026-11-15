

export const index = 6;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/read/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/6.DSeXo3hm.js","_app/immutable/chunks/e9Yf-h-2.js","_app/immutable/chunks/CUBzpAwE.js"];
export const stylesheets = ["_app/immutable/assets/6.WlbfboLs.css"];
export const fonts = [];

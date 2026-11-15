

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/settings/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.COAqJFh6.js","_app/immutable/chunks/e9Yf-h-2.js","_app/immutable/chunks/CUBzpAwE.js"];
export const stylesheets = ["_app/immutable/assets/7.hlODQl0v.css"];
export const fonts = [];

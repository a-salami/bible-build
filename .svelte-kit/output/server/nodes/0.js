

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.GoPCWBUa.js","_app/immutable/chunks/e9Yf-h-2.js","_app/immutable/chunks/CUBzpAwE.js"];
export const stylesheets = ["_app/immutable/assets/0.BPgSmC0x.css"];
export const fonts = [];

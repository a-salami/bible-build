

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/info/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.yZ57oDQR.js","_app/immutable/chunks/e9Yf-h-2.js","_app/immutable/chunks/CUBzpAwE.js"];
export const stylesheets = ["_app/immutable/assets/3.Bku4nnm3.css"];
export const fonts = [];

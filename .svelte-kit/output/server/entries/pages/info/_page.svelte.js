import { c as escape_html, r as ensure_array_like } from "../../../chunks/server.js";
// src/routes/info/+page.svelte
function _page($$renderer) {
	const notes = [
		"Focused on reading, memorization, and bilingual learning.",
		"Designed for desktop and mobile use while staying lightweight.",
		"Aims to support daily scripture practice without heavy infrastructure."
	];
	$$renderer.push(`<section class="info-card svelte-1r7g8g9"><p class="eyebrow svelte-1r7g8g9">Project info</p> <h1 class="svelte-1r7g8g9">BibleBuild</h1> <p class="lead svelte-1r7g8g9">A local-first Bible reading and memorization app built around daily rhythm, progress, and
    language learning.</p> <ul class="svelte-1r7g8g9"><!--[-->`);
	const each_array = ensure_array_like(notes);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let note = each_array[$$index];
		$$renderer.push(`<li>${escape_html(note)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></section>`);
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map
import { a as slot, c as escape_html, r as ensure_array_like, s as attr } from "../../chunks/server.js";
// src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	const navItems = [
		{
			label: "Home",
			href: "/"
		},
		{
			label: "Read",
			href: "/read"
		},
		{
			label: "Memorize",
			href: "/memorize"
		},
		{
			label: "Learn",
			href: "/learn"
		},
		{
			label: "Info",
			href: "/info"
		},
		{
			label: "Settings",
			href: "/settings"
		}
	];
	$$renderer.push(`<div class="app-shell svelte-12qhfyh"><header class="topbar svelte-12qhfyh"><a class="brand-wrap svelte-12qhfyh" href="/"><div class="brand-mark svelte-12qhfyh">B</div> <div><p class="eyebrow svelte-12qhfyh">BibleBuild</p></div></a> <nav class="topnav svelte-12qhfyh" aria-label="Main navigation"><!--[-->`);
	const each_array = ensure_array_like(navItems);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let item = each_array[$$index];
		$$renderer.push(`<a${attr("href", item.href)} class="svelte-12qhfyh">${escape_html(item.label)}</a>`);
	}
	$$renderer.push(`<!--]--></nav></header> <main class="page-shell svelte-12qhfyh"><!--[-->`);
	slot($$renderer, $$props, "default", {}, null);
	$$renderer.push(`<!--]--></main></div>`);
}
export { _layout as default };

//# sourceMappingURL=_layout.svelte.js.map
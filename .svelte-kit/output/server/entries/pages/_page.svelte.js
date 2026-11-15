import { c as escape_html, r as ensure_array_like, t as attr_class } from "../../chunks/server.js";
// src/routes/+page.svelte
function _page($$renderer) {
	const readingPlans = [
		{
			label: "English",
			active: true
		},
		{
			label: "Japanese",
			active: true
		},
		{
			label: "Audio",
			active: true
		}
	];
	const memorizationQueue = [
		{
			title: "Psalm 23",
			status: "Memorizing",
			progress: "3/5 sessions"
		},
		{
			title: "Romans 8:28",
			status: "Reviewing",
			progress: "2 days left"
		},
		{
			title: "John 1:1",
			status: "Memorized",
			progress: "Strong retention"
		}
	];
	const languageCards = [
		{
			title: "Verse of the Day",
			description: "Translate one English verse into Japanese."
		},
		{
			title: "Verse Randomized",
			description: "Practice with a fresh verse every round."
		},
		{
			title: "Verse Retained",
			description: "Test your memory with both languages side by side."
		}
	];
	const roadmap = [
		"Streak tracking and daily reading continuity",
		"Verse memorization workflow with progressive reveal",
		"Parallel language reading and word mapping",
		"Desktop and mobile-first experience",
		"Custom verse sharing and image export"
	];
	$$renderer.push(`<section class="hero card svelte-1uha8ag"><div class="hero-copy svelte-1uha8ag"><p class="eyebrow accent svelte-1uha8ag">Daily focus</p> <h1 class="svelte-1uha8ag">Read the Bible, memorize scripture, and learn Japanese.</h1> <p class="subtext svelte-1uha8ag">A daily practice app for reading, reciting, and mapping scripture across English and
      Japanese.</p> <div class="hero-actions"><a class="primary-button svelte-1uha8ag" href="/read">Read today</a></div></div> <div class="hero-panel"><div class="verse-card svelte-1uha8ag"><p class="label svelte-1uha8ag">Today's verse</p> <h3 class="svelte-1uha8ag">John 1:1</h3> <p class="verse-text svelte-1uha8ag">In the beginning was the Word, and the Word was with God, and the Word was God.</p> <div class="language-pill-row svelte-1uha8ag"><!--[-->`);
	const each_array = ensure_array_like(readingPlans);
	for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
		let plan = each_array[$$index];
		$$renderer.push(`<span${attr_class("language-pill svelte-1uha8ag", void 0, { "active": plan.active })}>${escape_html(plan.label)}</span>`);
	}
	$$renderer.push(`<!--]--></div></div></div></section> <section class="stats-grid svelte-1uha8ag"><article class="card stat-card svelte-1uha8ag"><p class="label svelte-1uha8ag">Current streak</p> <div class="stat-value svelte-1uha8ag">12 days</div> <p class="muted svelte-1uha8ag">You are building a daily scripture habit.</p></article> <article class="card stat-card svelte-1uha8ag"><p class="label svelte-1uha8ag">Memorization</p> <div class="stat-value svelte-1uha8ag">7 verses</div> <p class="muted svelte-1uha8ag">Three active, two review, two completed.</p></article></section> <section class="feature-grid svelte-1uha8ag"><article class="card svelte-1uha8ag"><div class="section-header svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Memorize</p></div> <ul class="stack-list svelte-1uha8ag"><!--[-->`);
	const each_array_1 = ensure_array_like(memorizationQueue);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let item = each_array_1[$$index_1];
		$$renderer.push(`<li class="svelte-1uha8ag"><div class="svelte-1uha8ag"><strong>${escape_html(item.title)}</strong> <span class="svelte-1uha8ag">${escape_html(item.status)}</span></div> <small>${escape_html(item.progress)}</small></li>`);
	}
	$$renderer.push(`<!--]--></ul></article> <article class="card svelte-1uha8ag"><div class="section-header svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Learn</p></div> <div class="learning-list svelte-1uha8ag"><!--[-->`);
	const each_array_2 = ensure_array_like(languageCards);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let card = each_array_2[$$index_2];
		$$renderer.push(`<div class="mini-card svelte-1uha8ag"><h4 class="svelte-1uha8ag">${escape_html(card.title)}</h4> <p class="svelte-1uha8ag">${escape_html(card.description)}</p></div>`);
	}
	$$renderer.push(`<!--]--></div></article></section> <section class="card roadmap-card svelte-1uha8ag"><div class="section-header svelte-1uha8ag"><p class="eyebrow svelte-1uha8ag">Foundation roadmap</p></div> <ul class="roadmap-list svelte-1uha8ag"><!--[-->`);
	const each_array_3 = ensure_array_like(roadmap);
	for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
		let step = each_array_3[$$index_3];
		$$renderer.push(`<li class="svelte-1uha8ag">${escape_html(step)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></section>`);
}
export { _page as default };

//# sourceMappingURL=_page.svelte.js.map
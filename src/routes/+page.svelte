<script lang="ts">
  const readingPlans = [
    { label: 'English', active: true },
    { label: 'Japanese', active: true },
    { label: 'Audio', active: true }
  ];

  const memorizationQueue = [
    { title: 'Psalm 23', status: 'Memorizing', progress: '3/5 sessions' },
    { title: 'Romans 8:28', status: 'Reviewing', progress: '2 days left' },
    { title: 'John 1:1', status: 'Memorized', progress: 'Strong retention' }
  ];

  const languageCards = [
    { title: 'Verse of the Day', description: 'Translate one English verse into Japanese.' },
    { title: 'Verse Randomized', description: 'Practice with a fresh verse every round.' },
    { title: 'Verse Retained', description: 'Test your memory with both languages side by side.' }
  ];

  const roadmap = [
    'Streak tracking and daily reading continuity',
    'Verse memorization workflow with progressive reveal',
    'Parallel language reading and word mapping',
    'Desktop and mobile-first experience',
    'Custom verse sharing and image export'
  ];
</script>

<section class="hero card">
  <div class="hero-copy">
    <p class="eyebrow accent">Daily focus</p>
    <h1>Read the Bible. Memorize Scripture. Learn Japanese.</h1>
    <p class="subtext">
      A daily dive into the Word of God, in the tongues of two nations.
    </p>

    <div class="hero-actions">
      <a class="primary-button" href="/read">Read today</a>
    </div>
  </div>

  <div class="hero-panel">
    <div class="verse-card">
      <p class="label">Today's verse</p>
      <h3>John 1:1</h3>
      <p class="verse-text">In the beginning was the Word, and the Word was with God, and the Word was God.</p>
      <div class="language-pill-row">
        {#each readingPlans as plan}
          <span class:active={plan.active} class="language-pill">{plan.label}</span>
        {/each}
      </div>
    </div>
  </div>
</section>

<section class="stats-grid">
  <article class="card stat-card">
    <p class="label">Current streak</p>
    <div class="stat-value">12 days</div>
    <p class="muted">You are building a daily scripture habit.</p>
  </article>

  <article class="card stat-card">
    <p class="label">Memorization</p>
    <div class="stat-value">7 verses</div>
    <p class="muted">Three active, two review, two completed.</p>
  </article>
</section>

<section class="feature-grid">
  <article class="card">
    <div class="section-header">
      <p class="eyebrow">Memorize</p>
    </div>

    <ul class="stack-list">
      {#each memorizationQueue as item}
        <li>
          <div>
            <strong>{item.title}</strong>
            <span>{item.status}</span>
          </div>
          <small>{item.progress}</small>
        </li>
      {/each}
    </ul>
  </article>

  <article class="card">
    <div class="section-header">
      <p class="eyebrow">Learn</p>
    </div>

    <div class="learning-list">
      {#each languageCards as card}
        <div class="mini-card">
          <h4>{card.title}</h4>
          <p>{card.description}</p>
        </div>
      {/each}
    </div>
  </article>
</section>

<!-- <section class="card roadmap-card">
  <div class="section-header">
    <p class="eyebrow">Foundation roadmap</p>
  </div>

  <ul class="roadmap-list">
    {#each roadmap as step}
      <li>{step}</li>
    {/each}
  </ul>
</section> -->

<style>
  .card {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.25rem;
    box-shadow: 0 15px 30px rgba(2, 6, 23, 0.25);
  }

  .hero {
    display: grid;
    grid-template-columns: 1.3fr 0.9fr;
    gap: 1.5rem;
    padding: 2rem;
    align-items: center;
  }

  .hero-copy h1 {
    margin: 0.35rem 0 0.8rem;
    font-size: clamp(2.2rem, 4vw, 3.5rem);
    line-height: 1.04;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.75rem;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    color: #a5b4fc;
  }

  .accent {
    color: #7dd3fc;
  }

  .subtext {
    color: #cbd5e1;
    line-height: 1.7;
    margin-bottom: 1.5rem;
  }

  .primary-button {
    display: inline-block;
    background: linear-gradient(135deg, #22c55e, #3b82f6);
    color: white;
    padding: 0.75rem 1.2rem;
    border-radius: 999px;
    text-decoration: none;
    font-weight: 700;
  }

  .verse-card {
    background: rgba(15, 118, 110, 0.18);
    border: 1px solid rgba(94, 234, 212, 0.2);
    border-radius: 1rem;
    padding: 1.2rem;
  }

  .label {
    margin: 0 0 0.5rem;
    color: #cbd5e1;
    text-transform: uppercase;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
  }

  .verse-card h3 {
    margin: 0 0 0.75rem;
    font-size: 2rem;
  }

  .verse-text {
    color: #e2e8f0;
    line-height: 1.6;
  }

  .language-pill-row {
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .language-pill {
    padding: 0.35rem 0.6rem;
    border-radius: 999px;
    border: 1px solid rgba(148, 163, 184, 0.3);
    color: #cbd5e1;
    font-size: 0.8rem;
  }

  .language-pill.active {
    background: rgba(14, 165, 233, 0.2);
    border-color: rgba(14, 165, 233, 0.6);
  }

  .stats-grid,
  .feature-grid {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1.25rem;
    margin-top: 1.5rem;
  }

  .stat-card,
  .feature-grid > .card,
  .roadmap-card {
    padding: 1.2rem 1.4rem;
  }

  .stat-value {
    font-size: clamp(1.7rem, 3vw, 2.4rem);
    font-weight: 700;
    margin: 0.2rem 0;
  }

  .muted {
    margin: 0;
    color: #cbd5e1;
  }

  .section-header {
    margin-bottom: 1rem;
  }

  .stack-list,
  .roadmap-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .stack-list li,
  .roadmap-list li {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 0.8rem 0;
    border-bottom: 1px solid rgba(148, 163, 184, 0.12);
  }

  .stack-list li:last-child,
  .roadmap-list li:last-child {
    border-bottom: none;
  }

  .stack-list li > div {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
  }

  .stack-list span,
  .roadmap-list li {
    color: #cbd5e1;
  }

  .learning-list {
    display: grid;
    gap: 0.85rem;
  }

  .mini-card {
    border: 1px solid rgba(148, 163, 184, 0.15);
    border-radius: 1rem;
    padding: 0.9rem;
    background: rgba(15, 23, 42, 0.8);
  }

  .mini-card h4 {
    margin: 0 0 0.45rem;
  }

  .mini-card p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.5;
  }

  .roadmap-card {
    margin-top: 1.5rem;
  }

  @media (max-width: 768px) {
    .hero,
    .stats-grid,
    .feature-grid {
      grid-template-columns: 1fr;
    }
  }
</style>

<section class="page-card">
  <p class="eyebrow">Memorize</p>
  <h1>Scripture memory queue</h1>

  <div class="list">
    <article>
      <strong>Psalm 23</strong>
      <span>Memorizing</span>
      <small>3/5 sessions</small>
    </article>
    <article>
      <strong>Romans 8:28</strong>
      <span>Reviewing</span>
      <small>2 days left</small>
    </article>
    <article>
      <strong>John 1:1</strong>
      <span>Memorized</span>
      <small>Strong retention</small>
    </article>
  </div>
</section>

<style>
  .page-card {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.25rem;
    padding: 2rem;
  }

  .eyebrow {
    color: #7dd3fc;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.75rem;
    margin: 0 0 0.5rem;
  }

  h1 {
    margin: 0 0 1.25rem;
    font-size: clamp(2rem, 4vw, 2.8rem);
  }

  .list {
    display: grid;
    gap: 0.9rem;
  }

  article {
    display: grid;
    grid-template-columns: 1.2fr auto auto;
    gap: 1rem;
    align-items: center;
    padding: 1rem 1.1rem;
    border-radius: 0.9rem;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.1);
  }

  strong,
  span,
  small {
    color: #e2e8f0;
  }
</style>

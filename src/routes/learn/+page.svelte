<section class="page-card">
  <p class="eyebrow">Learn</p>
  <h1>Japanese scripture practice</h1>

  <div class="cards">
    <article>
      <h2>Verse of the Day</h2>
      <p>Translate one verse into Japanese and check your recall.</p>
    </article>
    <article>
      <h2>Verse Randomized</h2>
      <p>Practice with a fresh scripture prompt each day.</p>
    </article>
    <article>
      <h2>Verse Retained</h2>
      <p>Revisit memorized verses and test yourself in both languages.</p>
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

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }

  article {
    padding: 1.2rem;
    border-radius: 1rem;
    background: rgba(30, 41, 59, 0.8);
    border: 1px solid rgba(148, 163, 184, 0.12);
  }

  h2 {
    margin: 0 0 0.5rem;
  }

  p {
    margin: 0;
    color: #cbd5e1;
    line-height: 1.7;
  }
</style>

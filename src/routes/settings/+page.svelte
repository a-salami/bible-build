<section class="page-card">
  <p class="eyebrow">Settings</p>
  <h1>App preferences</h1>

  <div class="settings-list">
    <div>
      <span class="label">Theme</span>
      <span>Dark</span>
    </div>
    <div>
      <span class="label">Reading mode</span>
      <span>English + Japanese</span>
    </div>
    <div>
      <span class="label">Daily reminder</span>
      <span>Enabled</span>
    </div>
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

  .settings-list {
    display: grid;
    gap: 1rem;
  }

  .settings-list > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 1rem;
    padding: 1rem 1.1rem;
    border-radius: 0.9rem;
    background: rgba(30, 41, 59, 0.7);
    border: 1px solid rgba(148, 163, 184, 0.12);
  }

  .label,
  span {
    color: #e2e8f0;
  }
</style>

<script lang="ts">
  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Read', href: '/read' },
    { label: 'Memorize', href: '/memorize' },
    { label: 'Learn', href: '/learn' },
    { label: 'Info', href: '/info' },
    { label: 'Settings', href: '/settings' }
  ];
</script>

<div class="app-shell">
  <header class="topbar">
    <a class="brand-wrap" href="/">
      <div class="brand-mark">B</div>
      <div>
        <p class="eyebrow">BibleBuild</p>
      </div>
    </a>

    <nav class="topnav" aria-label="Main navigation">
      {#each navItems as item}
        <a href={item.href}>{item.label}</a>
      {/each}
    </nav>
  </header>

  <main class="page-shell">
    <slot />
  </main>
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: Inter, 'Segoe UI', sans-serif;
    background: #0f172a;
    color: #e2e8f0;
  }

  :global(*) {
    box-sizing: border-box;
  }

  .app-shell {
    min-height: 100vh;
    background: linear-gradient(180deg, #0f172a 0%, #111827 100%);
  }

  .topbar {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding: 1rem 1.5rem;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(148, 163, 184, 0.18);
    z-index: 10;
  }

  .brand-wrap {
    display: inline-flex;
    align-items: center;
    gap: 0.8rem;
    text-decoration: none;
    color: inherit;
  }

  .brand-mark {
    display: grid;
    place-items: center;
    width: 2rem;
    height: 2rem;
    border-radius: 0.65rem;
    font-weight: 700;
    background: linear-gradient(135deg, #22c55e, #3b82f6);
    color: white;
  }

  .eyebrow {
    margin: 0;
    font-size: 0.72rem;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    opacity: 0.75;
  }

  .topnav {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    flex-wrap: wrap;
  }

  .topnav a {
    color: #dbeafe;
    text-decoration: none;
    opacity: 0.8;
  }

  .topnav a:hover {
    opacity: 1;
  }

  .page-shell {
    width: min(1100px, calc(100% - 2rem));
    margin: 0 auto;
    padding: 2rem 0 3rem;
  }

  @media (max-width: 640px) {
    .topbar {
      flex-direction: column;
      align-items: flex-start;
    }

    .topnav {
      gap: 0.6rem 1rem;
      font-size: 0.9rem;
    }
  }
</style>

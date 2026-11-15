<script lang="ts">
  const notes = [
    'Focused on reading, memorization, and bilingual learning.',
    'Designed for desktop and mobile use while staying lightweight.',
    'Aims to support daily scripture practice without heavy infrastructure.'
  ];

  const read = [
    'Today\'s Word: see a tidbit of the Word in English and Japanese.',
    'The Word: read Scripture in parallel languages.',
    'Read-Aloud: listen to Scripture in English and Japanese with synchronized text. The best book to audiobook.'
  ]

  const memorize = [
    'Verse of the Day: one English verse per day to memorize in Japanese. A daily practice.',
    'Verse Randomized: presented with any English verse, translate it into Japanese. An endless serving, one verse at a time.',
    'Verse Retained: take the next step with a verse you already know in English. Once per day, type a known verse in English and Japanese. ',
    'Verse Retained Unlimited: Once per day not enough? Practice as many verses against every verse you have memorized.'
  ]

    const learn = [
        'Language Cards: learn Japanese words and phrases from Scripture.',
        'Word Mapping: see how words are used in context across verses.'
    ]
</script>

<section class="info-card">
  <p class="eyebrow">Project info</p>
  <h1>What BibleBuild Is</h1>
  <p class="lead">
    A local-first Bible reading and memorization app built around daily rhythm, progress, and
    language learning.
  </p>

  <ul>
    {#each notes as note}
      <li>{note}</li>
    {/each}
  </ul>
</section>

<section class="info-card">
  <p class="eyebrow">Site Map</p>
  <h1>What BibleBuild Has</h1>
  <p>Our design philosophy has three goals  in mind, each which influences the other. Actually read the word, hide it in your heart, and hide it so well you can translate it to tell someone else.</p>

  <p class="lead">Read</p>
  <ul>
    {#each read as r}
      <li>{r}</li>
    {/each}
  </ul>

    <p class="lead">Memorize</p>
    <ul>
        {#each memorize as m}
        <li>{m}</li>
        {/each}
    </ul>

    <p class="lead">Learn</p>
    <ul>
        {#each learn as l}
        <li>{l}</li>
        {/each}
  </ul>
</section>

<style>
  .info-card {
    background: rgba(15, 23, 42, 0.85);
    border: 1px solid rgba(148, 163, 184, 0.16);
    border-radius: 1.25rem;
    padding: 2rem;
  }

  .eyebrow {
    margin: 0 0 0.5rem;
    color: #7dd3fc;
    text-transform: uppercase;
    letter-spacing: 0.12em;
    font-size: 0.75rem;
  }

  h1 {
    margin: 0 0 0.8rem;
    font-size: clamp(2.2rem, 4vw, 3rem);
  }

  .lead {
    color: #dbeafe;
    line-height: 1.7;
    margin-bottom: 1.2rem;
  }

  ul {
    padding-left: 1.2rem;
    color: #cbd5e1;
    line-height: 1.8;
  }
</style>

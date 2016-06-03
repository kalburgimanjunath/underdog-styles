---
title: Hero
---

Heros are used to summarize the main objective of a page or website. They should always
be the first element in a page, and there should never be more than one hero on a single page.

`.hero` uses flexbox to center content, so all content must be contained within a single node.

### Default hero

<div class="hero">
  <div>
    <h1 class="push18--bottom">Apply to top startup jobs in 60 seconds</h1>
    <p class="gamma push25--bottom">We connect candidates with awesome New York, San Francisco, and remote companies</p>
    <div>
      <a class="btn btn--secondary push18--right" href="#hero">Candidates</a>
      <a class="btn btn--secondary push18--left" href="#hero">Startups</a>
    </div>
  </div>
</div>

```html
<div class="hero">
  <div>
    <h1 class="push18--bottom">Apply to top startup jobs in 60 seconds</h1>
    <p class="gamma push25--bottom">We connect candidates with awesome New York, San Francisco, and remote companies</p>
    <div>
      <a class="btn btn--secondary push18--right" href="#hero">Candidates</a>
      <a class="btn btn--secondary push18--left" href="#hero">Startups</a>
    </div>
  </div>
</div>
```

### Large hero

Use the `.hero--large` modifier to get a larger hero that will scale to take up a majority of the viewport height.

<div class="hero hero--large">
  <div>
    <h1 class="push18--bottom">Apply to top startup jobs in 60 seconds</h1>
    <p class="gamma push25--bottom">We connect candidates with awesome New York, San Francisco, and remote companies</p>
    <div>
      <a class="btn btn--secondary push18--right" href="#hero">Candidates</a>
      <a class="btn btn--secondary push18--left" href="#hero">Startups</a>
    </div>
  </div>
</div>

```html
<div class="hero--large">
  <div>
    <h1 class="push18--bottom">Apply to top startup jobs in 60 seconds</h1>
    <p class="gamma push25--bottom">We connect candidates with awesome New York, San Francisco, and remote companies</p>
    <div>
      <a class="btn btn--secondary push18--right" href="#hero">Candidates</a>
      <a class="btn btn--secondary push18--left" href="#hero">Startups</a>
    </div>
  </div>
</div>
```

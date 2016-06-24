---
title: Hero
---

Heros are used to summarize the main objective of a page or website. They should always
be the first element in a page, and there should never be more than one hero on a single page.

`.hero` uses flexbox to center content, so all content must be contained within a single node.

### Default hero

<div class="hero">
  <div class="hero__content">
    <img class="hero__image" alt=" " src="/dist/img/assembly_line.svg" />
    <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    <div class="row">
      <div class="col-5-large-and-up offset-1-large-and-up push18--bottom">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Candidates</a>
      </div>
      <div class="col-5-large-and-up">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Companies</a>
      </div>
    </div>
  </div>
</div>

```html
<div class="hero">
  <div class="hero__content">
    <img class="hero__image" alt=" " src="/dist/img/assembly_line.svg" />
    <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    <div class="row">
      <div class="col-5-large-and-up offset-1-large-and-up push18--bottom">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Candidates</a>
      </div>
      <div class="col-5-large-and-up">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Companies</a>
      </div>
    </div>
  </div>
</div>
```

### Large hero

Use the `.hero--large` modifier to get a larger hero that will scale to take up a majority of the viewport height.

<div class="hero hero--large">
  <div class="hero__content">
    <img class="hero__image" alt=" " src="/dist/img/assembly_line.svg" />
    <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    <div class="row">
      <div class="col-5-large-and-up offset-1-large-and-up push18--bottom">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Candidates</a>
      </div>
      <div class="col-5-large-and-up">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Companies</a>
      </div>
    </div>
  </div>
</div>

```html
<div class="hero hero--large">
  <div class="hero__content">
    <img class="hero__image" alt=" " src="/dist/img/assembly_line.svg" />
    <h1 class="hero__title">Apply to top technology jobs in 60 seconds</h1>
    <p class="hero__subtitle">We connect job seekers to awesome companies in New York, San Francisco, and beyond.</p>
    <div class="row">
      <div class="col-5-large-and-up offset-1-large-and-up push18--bottom">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Candidates</a>
      </div>
      <div class="col-5-large-and-up">
        <a class="btn btn--primary btn--large btn--block" href="#hero">Companies</a>
      </div>
    </div>
  </div>
</div>
```

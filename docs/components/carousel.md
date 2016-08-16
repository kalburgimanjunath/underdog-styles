---
title: Carousel
category: Components
---

Your standard carousel, buit off of [Swipe](https://github.com/nickleefly/swipe).

In order for a carousel to work, the `carousel.js` module located under `/js/components/`
must be loaded as well.

<div class="carousel">
  <div class="carousel__wrapper">
    <div class="carousel__slide">Slide One</div>
    <div class="carousel__slide">Slide Two</div>
    <div class="carousel__slide">Slide Three</div>
  </div>
  <div class="carousel__status">
    <span class="carousel__indicator" role="button" aria-label="skip to slide 1" tabindex="0"></span>
    <span class="carousel__indicator" role="button" aria-label="skip to slide 2" tabindex="0"></span>
    <span class="carousel__indicator" role="button" aria-label="skip to slide 3" tabindex="0"></span>
  </div>
</div>

```html
<div class="carousel">
  <div class="carousel__wrapper">
    <div class="carousel__slide">Slide One</div>
    <div class="carousel__slide">Slide Two</div>
    <div class="carousel__slide">Slide Three</div>
  </div>
  <div class="carousel__status">
    <span class="carousel__indicator" role="button" aria-label="skip to slide 1" tabindex="0"></span>
    <span class="carousel__indicator" role="button" aria-label="skip to slide 2" tabindex="0"></span>
    <span class="carousel__indicator" role="button" aria-label="skip to slide 3" tabindex="0"></span>
  </div>
</div>
```

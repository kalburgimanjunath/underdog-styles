---
title: Header
---

Our header is a full width header which should not be contained within a `.container`.
To make a header sticky, apply the `.header--fixed` modifier class to it.

<div class="header">
  <div class="header__logo"><img class="hidden--small" src="//placehold.it/190x55" alt="Placeholder logo" width="190" height="55"><img class="hidden--medium-and-up" src="//placehold.it/52x55" alt="Placeholder logo" width="52" height="55"></div>
  <div class="header__nav">
    <div class="hidden--small"><span class="gamma push10--right">Lionel Itchy</span><span class="icon icon-arrow"></span></div>
    <div class="hidden--medium-and-up"><span class="icon icon-menu" aria-hidden="true"></span><span class="gamma"> Menu</span></div>
  </div>
</div>

```html
<div class="header">
  <div class="header__logo">
    <img src="..." alt="..." width="190" height="55" />
  </div>
  <div class="header__nav">
    <span>Lionel Itchy</span>
    <span class="icon icon-arrow" />
  </div>
</div>
```

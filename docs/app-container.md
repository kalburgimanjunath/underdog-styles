---
title: App Container
---

The `.app-container` allows you create a full screen app layout that keeps the header in view at all times but allows you to scroll the main content.

The main content will stretch to fill the height of the container, minus the header, and can be scrolled if it contains more content than can fit into the height of the viewport.

There should be just one `.app-container` on a page, and it should always to applied to the top most node of the page layout.

NOTE: The `.app-container` in this example has a restricted width and height, but by default it will match the width and height of the viewport.

<div class="app-container" style="width: 100%; height: 25em;">
  <div class="app-container__header header">
    <div class="header__logo">
      <img src="" alt="Logo" width="217" height="45" />
    </div>
    <div class="header__nav">
      <span>Lionel Itchy</span>
      <span class="icon icon-arrow" />
    </div>
  </div>
  <div class="app-container__content greybox">
    <p>
      Cursus eu quibusdam lectus itaque pulvinar, ullamco facilisi sunt, praesent placerat eaque? Minima minima sunt malesuada perferendis vero condimentum sapien, beatae eleifend debitis elementum luctus adipisci delectus iure penatibus incidunt accusamus aenean architecto dis sequi nunc! Nunc a excepteur taciti, natus sollicitudin, feugiat ante, inventore commodo sollicitudin primis delectus, fugit sunt! Felis minus ante repellat voluptas. Aliqua ornare egestas blandit vel nascetur proin expedita, ultricies maecenas. Ipsam eaque, possimus quam sit primis! Ut viverra wisi nullam temporibus ullamcorper officia morbi erat metus anim ullamcorper. Hic, nibh tortor sed quo nostrud porta accusantium impedit congue molestias. Praesent, enim quod nostrum sociosqu.
    </p>
    <p>
      Nobis blanditiis quo potenti etiam aut netus facere sagittis lectus quia rutrum! Aliquid porta, numquam lacinia, duis netus voluptatum, quasi. Blanditiis molestias. Iusto magnis, laborum quos, non eros eleifend rhoncus corrupti voluptates, mattis lectus et ab euismod dui tortor facilisis? Fugit feugiat. Nibh eleifend distinctio! Omnis commodi metus! Ipsam felis sit etiam minima lacinia excepturi, cursus dolor tortor consequuntur odit, cum ea curabitur, dictumst, soluta recusandae maxime nulla! Commodo sint laboris. Condimentum, a, potenti, ultricies, elit qui perferendis, lorem labore, posuere, venenatis soluta imperdiet? Quo? Sunt, turpis tincidunt nec montes facilisis nostrud! Primis gravida rhoncus architecto? Cras, imperdiet corrupti, eius.
    </p>
    <p>
      Rhoncus interdum pretium. Nunc justo? Vero hic sociis expedita, quisque semper aliqua incididunt urna, culpa rhoncus corporis dolor, aliquam officia illum? Sapien, nascetur mus. Soluta quaerat, exercitation euismod ligula consequatur. Nulla fringilla ridiculus quisquam, ultricies orci, nec error distinctio fugit, iste quasi doloribus viverra corporis risus deleniti fuga architecto magni donec suspendisse maecenas laboriosam aliquam quas! Quia risus nostrud taciti, occaecati platea repellendus laboris, etiam erat, quas at lacinia eget fusce deserunt molestie tortor necessitatibus curae vehicula sequi, doloribus suspendisse! Aut praesentium adipisci aliquip animi eu expedita torquent! Dui? Occaecat? Illo! Qui? Nisl magnis, perspiciatis porttitor? Dolor dolorem provident lacinia.
    </p>
  </div>
</div>

```html
<div class="app-container">
  <div class="app-container__header">
    Header in here
  </div>
  <div class="app-container__content">
    Content
  </div>
</div>
```

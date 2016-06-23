---
title: Tooltip
---

Add a tooltip to an element by adding the class `tooltip`. You can set the content of
the tooltip by setting the `aria-label` attribute.

<div class="tooltip text--center border--top border--right border--bottom border--left" aria-label="This is tooltip" style="margin-bottom: 4em;">
  Center tooltip
</div>

<div class="tooltip tooltip--right text--center border--top border--right border--bottom border--left" aria-label="This is tooltip" style="margin-bottom: 4em;">
  Right tooltip
</div>

<div class="tooltip tooltip--left text--center border--top border--right border--bottom border--left" aria-label="This is tooltip" style="margin-bottom: 4em;">
  Left tooltip
</div>

```html
<div class="tooltip" aria-label="This is tooltip">
  Hover over me!
</div>

<div class="tooltip tooltip--right" aria-label="This is tooltip">
  Hover over me!
</div>

<div class="tooltip tooltip--left" aria-label="This is tooltip">
  Hover over me!
</div>
```

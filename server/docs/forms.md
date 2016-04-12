---
title: Forms
---

## Text input

`.block-input` fields will fill the width of their container. Paired with our grid system, we can easily create full and half width input fields.

<div class="row">
  <div class="col-12">
    <label class="block-label">Full width input</label>
    <input class="block-input" type="text" />
  </div>
</div>
<div class="row">
  <div class="col-6">
    <label class="block-label">First half</label>
    <input class="block-input" type="email" />
  </div>
  <div class="col-6">
    <label class="block-label">Second half</label>
    <input class="block-input" type="password" />
  </div>
</div>

```html
<div class="row">
  <div class="col-12">
    <label class="block-label">Full width input</label>
    <input class="block-input" type="text" />
  </div>
</div>
<div class="row">
  <div class="col-6">
    <label class="block-label">First half</label>
    <input class="block-input" type="email" />
  </div>
  <div class="col-6">
    <label class="block-label">Second half</label>
    <input class="block-input" type="password" />
  </div>
</div>
```

## Disabled text input

To disabled a text input you can set the property `disabled="true"`.

<label class="block-label">Disabled</label>

<input class="block-input" type="text" disabled="true" />

```html
<label class="block-label">Disabled</label>
<input class="block-input" type="text" disabled="true" />
```

## Text input with error

<label class="block-label block-label--error">Error</label>

<input class="block-input input--error" type="text" />

```html
<label class="block-label block-label--error">Error</label>
<input class="block-input input--error" type="text" />
```

## Submit button

<button type="submit" class="btn btn--block btn--primary">
  Submit button
</button>

```html
<button type="submit" class="btn btn--block btn--primary">
  Submit button
</button>
```

## Checkbox

To use a normal inline checkbox use the class name of `.checkbox`.

<label class="checkbox">
  <input type="checkbox" />
  A checkbox
</label>

```html
<label class="checkbox">
  <input type="checkbox" />
  A checkbox
</label>
```

## Nested checkbox

To add a checkbox nested under a parent input use the additional class name of `.checkbox--nested`.

<label class="checkbox checkbox--nested">
  <input type="checkbox" />
  A nested checkbox
</label>

```html
<label class="checkbox checkbox--nested">
  <input type="checkbox" />
  A nested checkbox
</label>
```

## Radio

To use a normal inline radio use the class name of `.radio`.

<label class="radio">
  <input type="radio" />
  A radio
</label>

```html
<label class="radio">
  <input type="radio" />
  A radio
</label>
```

---
title: Buttons
---

All buttons must use the base classname of `.btn` and can be disabled using the `.btn--disabled` class.

## Primary button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--primary">Primary button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--primary btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

Primary buttons.

```html
<button class="btn btn--primary">Primary button</button>
<button class="btn btn--primary btn--disabled" disabled="true">Disabled button</button>
```

## Secondary button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--secondary">Secondary button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--secondary btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

Secondary buttons.

```html
<button class="btn btn--secondary">Secondary button</button>
<button class="btn btn--secondary btn--disabled" disabled="true">Disabled button</button>
```

## Danger button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--danger">Danger button</button>
  </div>
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--danger btn--disabled" disabled="true">Disabled button</button>
  </div>
</div>

```html
<button class="btn btn--danger">Danger button</button>
<button class="btn btn--danger btn--disabled" disabled="true">Disabled button</button>
```

## Google sign in button

<div class="row">
  <div class="col-3-medium-and-up col-6-small">
    <button class="btn btn--google">G+ Sign in with Google</button>
  </div>
</div>

Google button.

```html
<button class="btn btn--secondary">G+ Sign in with Google</button>
```

## Link as a button

You can also style an `a` tag as a button.

<a href="#" class="btn btn--primary">Primary link</a>

Link as a button.

```html
<a href="#" class="btn btn--primary">Primary link</a>
```

## Block button

A block button will fill the full width of it's parent container and any adjacent buttons will has a small amount of spacing between them.

<button class="btn btn--primary btn--block">Primary button</button>

<button class="btn btn--secondary btn--block">Secondary button</button>

Block buttons.

```html
<button class="btn btn--primary btn--block">Primary button</button>
<button class="btn btn--secondary btn--block">Secondary button</button>
```

## Button with icon

Buttons can contain non-text elements like icons.

<button class="btn btn--secondary">
  <span class="icon__label icon__label--reverse">Download</span>
  <span class="icon icon-arrow icon--small" aria-hidden="true" />
</button>

Button with icon.

```html
<button class="btn btn--secondary">
  <span class="icon__label icon__label--reverse">Download</span>
  <span class="icon icon-arrow icon--small" aria-hidden="true" />
</button>
```

## Button with dropdown

Buttons can contain dropdown menus.

<div style="height: 300px; padding-left: 100px;">
  <div class="btn-menu">
    <button class="btn btn--secondary">
      <span class="icon__label icon__label--reverse">Download</span>
      <span class="icon icon-arrow icon--small" aria-hidden="true" />
    </button>
    <div class="dropdown-menu">
      <div class="dropdown-menu__wrapper">
        <span class="list-heading">chris@underdog.io</span>
        <div class="dropdown-menu__content">
          <ul class="menu-list">
            <li class="menu-list__item">
              <a class="nav-link" href="/settings/">Settings</a>
            </li>
            <li class="menu-list__item">
              <a class="nav-link" href="/support/">Support</a>
            </li>
            <li class="menu-list__item">
              <a class="nav-link" href="/logout/">Log out</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

```html
<span class="btn-menu">
  <button class="btn btn--secondary">
    <span class="icon__label icon__label--reverse">Download</span>
    <span class="icon icon-arrow icon--small" aria-hidden="true" />
  </button>

  <div class="dropdown-menu">
    <div class="dropdown-menu__wrapper">
      <span class="list-heading">chris@underdog.io</span>
      <div class="dropdown-menu__content">
        <ul class="menu-list">
          <li class="menu-list__item">
            <a class="nav-link" href="/settings/">Settings</a>
          </li>
          <li class="menu-list__item">
            <a class="nav-link" href="/support/">Support</a>
          </li>
          <li class="menu-list__item">
            <a class="nav-link" href="/logout/">Log out</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</span>
```

### Button groups

Button groups can be grouped within a `.btn-group`. Button groups can contain any
type of button.

<div class="btn-group">
  <a class="btn btn--primary" href="mailto:bark@underdog.io">
    Email
  </a>
  <button class="btn btn--primary btn--small">
    <span class="icon icon-arrow icon--small">
    </span>
  </button>
</div>

<div class="btn-group">
  <button class="btn btn--secondary">
    A button
  </button>
  <button class="btn btn--secondary btn--small">
    <span class="icon icon-arrow icon--small">
    </span>
  </button>
</div>

```html
<div class="btn-group">
  <a class="btn btn--primary" href="mailto:bark@underdog.io">
    Email
  </a>
  <button class="btn btn--primary btn--small">
    <span class="icon icon-arrow icon--small">
    </span>
  </button>
</div>

<div class="btn-group">
  <button class="btn btn--secondary">
    A button
  </button>
  <button class="btn btn--secondary btn--small">
    <span class="icon icon-arrow icon--small">
    </span>
  </button>
</div>
```

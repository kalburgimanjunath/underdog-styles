---
title: Dropdown Menu
---

Use to display menu items in a hidden menu. Dropdown menus are positioned absolutely, so
they should only be used within elements that have their `position` property set to anything other than `static`.

<div style="position: relative; margin-bottom: 300px; width: 300px;">
  <div class="dropdown-menu">
    <div class="dropdown-menu__wrapper">
      <span class="list-heading">chrishasasuperlongname@underdog.io</span>
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

```html
<div class="dropdown-menu">
  <div class="dropdown-menu__wrapper">
    <span class="list-heading">chrishasasuperlongname@underdog.io</span>
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
```

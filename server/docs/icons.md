---
title: Icons
---

<ul>
  <li><span class="icon icon-arrow"> Arrow</span></li>
  <li><span class="icon icon-back"> Back</span></li>
  <li><span class="icon icon-close"> Close</span></li>
  <li><span class="icon icon-copy-link"> Copy link</span></li>
  <li><span class="icon icon-dribble"> Dribble</span></li>
  <li><span class="icon icon-filter"> Filter</span></li>
  <li><span class="icon icon-github"> GitHub</span></li>
  <li><span class="icon icon-linkedin"> LinkedIn</span></li>
  <li><span class="icon icon-location"> Location</span></li>
  <li><span class="icon icon-locked"> Locked</span></li>
  <li><span class="icon icon-menu"> Menu</span></li>
  <li><span class="icon icon-next"> Next</span></li>
  <li><span class="icon icon-other-link"> Other link</span></li>
  <li><span class="icon icon-referral"> Referral</span></li>
  <li><span class="icon icon-resume"> Resume</span></li>
  <li><span class="icon icon-settings"> Settings</span></li>
  <li><span class="icon icon-small-arrow"> Small arrow</span></li>
  <li><span class="icon icon--small icon-back"> Small back</span></li>
  <li><span class="icon icon--small icon-next"> Small next</span></li>
  <li><span class="icon icon-support"> Support</span></li>
  <li><span class="icon icon-visa"> Visa</span></li>
</ul>

# Accessibility
To support screen readers all icons should have an appropriate label or text associated with them.

Icons can contain text directly, which will be shown and be the text read by the screen reader.

```html
<span class="icon icon-github">GitHub</span>
```

If the icon is associated with nearby text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-hidden" target="_blank">aria-hidden</a> should be used to ensure that the screen reader will not try to read or focus on the icon element.

```html
<span class="icon icon-github" aria-hidden="true">
  <span>GitHub</span>
</span>
```

If the icon has no accompanying text, then <a href="https://www.w3.org/TR/wai-aria/states_and_properties#aria-label" target="_blank">aria-label</a> should be used, which tells the screen reader what to read when focusing on that icon element.

```html
<span class="icon icon-github" aria-label="github"></span>
```

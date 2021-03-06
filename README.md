Underdog Styles [DEPRECATED]
===============

This project has been deprecated. Please use [Pup](https://github.com/underdogio/pup) instead.

Repository containing the common/organization wide styles and UI Kit.

## Quick start
```bash
# Clone the repository
git clone git@github.com:underdogio/underdog-styles.git
cd ./underdog-styles

# Install dependencies
npm install

# Start server
npm start

# Start server and restart on changes from server/
npm run start-develop

# Start `node-sass` watching for changes in scss/
npm run develop

# Re-build icon fonts
npm run build-icons

# Runniing tests
npm test
```

## Usage in project
To utilize these styles in your repository you should install `underdog-styles` with `npm`.

As of right now we are keeping this repository private until it gets to a more stable place. That means until that time we must install it using the full private git repository url and the latest commit SHA hash for versioning.

```bash
# Install `underdog-styles` from private git repository
npm install --save underdogio/underdog-styles#<GIT-TAG>

# e.g.
npm install --save underdogio/underdog-styles#1.3.12
```

To import all of `underdog-styles` into your project, add the following to your SASS file:

```sass
@import "underdog-styles/scss/underdog";
```

When compiling be sure to include your project's `node_modules/` folder as an include path for SASS, e.g.:

```bash
node-sass --include-path node_modules/ --output dist/css/ public/scss/style.scss
```

### Partial import
If you want to include parts of `underdog-styles` (e.g. specific components), but not everything, you can use the following in your SASS file:

```sass
// Include required base styles (variables, inuit.css, and mixins)
@import 'underdog-styles/scss/base';

// Include basic required elements
@import 'underdog-styles/scss/objects/container';
@import 'underdog-styles/scss/objects/grid';

// Include Underdog.io custom components
@import 'underdog-styles/scss/components/header';
```

Note: You will always want to include `underdog-styles/scss/base` as that includes all variables, mixins, and the base `inuit.css` styles needed.

## Icon font
We use a custom icon font which is generated from individual SVGs stored in `icons/*.svg`.

### Adding a new icon

When adding a new icon, make sure the size of the icon is `100px` by `100px`, and that the icon is taking up either
the full width or height of the viewbox. This is to ensure that all icons are rendered at the same size. 

### Usage
In order to utilize the icon font that is generated in this project you will need to copy the fonts into your project.

This can be done by copying them from `fonts/` once and committing into your project, or else you can setup a `gulp` task to copy the icon font files at build time into your project.

```js
gulp.task('copy-fonts', function copyFonts () {
  gulp.src('node_modules/underdog-styles/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});
```

If you are using the icon font in your project you will also have to override the `$icon-font-path` variable to ensure the fonts get loaded properly.

```sass
$icon-font-path: '/dist/fonts/';
```

### Compiling icon font

To compile the icon font, run `npm run icons`.

## Images

Images that are shared by all of our projects, such as our logo, are kept under the `/images` directory.

## Favicons

Favicons are kept under `favicons/*`. In order to use these favicons you must copy them into your project.
You must also update the paths to the favicons in `favicons/browserconfig.xml`, `favicons/manifest.json`, and
in the `<head />` tag of your HTML document.

### Updating browserconfig.xml and manifest.json

By default `browserconfig.xml` and `manifest.json` are assuming that icons are being served from `/dist/`. The path to each icon defined in these files must be manually updated to match the path where the favicons are being served from.

#### browserconfig.xml

```xml
<square70x70logo src="/path/to/favicons/mstile-70x70.png"/>
```

#### manifest.json

```json
{
  "src": "\/path\/to\/favicons\/android-chrome-36x36.png",
  "sizes": "36x36",
  "type": "image\/png",
  "density": 0.75
}
```

### Markup for importing icons in an HTML document

You must include the following markup in the `<head />` tag of the HTML document you want the favicons to be displayed for.

**Note**: The following markup is assuming that icons are being served from `/dist/`.
You must manually update the paths for each icon to the actual path where the favicons are being served from.

```html
<meta name="apple-mobile-web-app-title" content="Underdog.io" />
<meta name="application-name" content="Underdog.io" />
<meta name="msapplication-TileColor" content="#72ceaa" />
<meta name="msapplication-TileImage" content="/dist/mstile-144x144.png" />
<meta name="theme-color" content="#524b7a" />

<link rel="apple-touch-icon" sizes="57x57" href="/dist/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="/dist/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="/dist/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="/dist/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="/dist/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="/dist/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="/dist/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="/dist/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="/dist/apple-touch-icon-180x180.png" />
<link rel="icon" type="image/png" href="/dist/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="/dist/android-chrome-192x192.png" sizes="192x192" />
<link rel="icon" type="image/png" href="/dist/favicon-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="/dist/favicon-16x16.png" sizes="16x16" />
<link rel="manifest" href="/dist/manifest.json" />
<link rel="mask-icon" href="/dist/safari-pinned-tab.svg" color="#524b7a" />
```

## How to add a section the styleguide

1. Create a Markdown file in the `./server/docs` directory.

2. Add some metadata about the section at the top of the file:

```
---
title: Section Name
---
```

3. Write out a short description of your component, followed by an example and some source code.


### Example section

`links.md`

```
---
title: Links
---

Links take you places.

<a href="#">A link</a>

`<a href="#">A link</a>`
```


[ttfautohint]: http://www.freetype.org/ttfautohint/

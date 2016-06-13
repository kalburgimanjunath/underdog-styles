Underdog Styles
===============

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
To utilize these styles in your repository you should install `underdog-styles` with `bower`.

As of right now we are keeping this repository private until it gets to a more stable place. That means until that time we must install it using the full private git repository url and the latest commit SHA hash for versioning.

```bash
# Install `underdog-styles` from private git repository
bower install --save git@github.com:underdogio/underdog-styles.git#<SHA-HASH>

# e.g.
bower install --save git@github.com:underdogio/underdog-styles.git#29a32b8513b9bf96f6bb7ff96f571c332d88fb46
```

To import all of `underdog-styles` into your project, add the following to your SASS file:

```sass
@import "underdog-styles/scss/underdog";
```

When compiling be sure to include your projects `bower_components/` folder as an include path for SASS, e.g.:

```bash
node-sass --include-path bower_components/ --output dist/css/ public/scss/style.scss
```

Bower flattens dependencies so we need to utilize the include path to ensure that when compiling that `underdog-styles` is able to find/import `inuit.css` since it will exist in your `bower_components/` folder and not a nested one used by `underdog-styles`.

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
We use a custom icon font which is generated from individual SVGs stored in `icons/*.svg`. The fonts are generated in [IcoMoon](https://icomoon.io/app/) from these SVGs, and the compiled fonts are stored in `fonts/`.

### Usage
In order to utilize the icon font that is generated in this project you will need to copy the fonts into your project.

This can be done by copying them from `fonts/` once and committing into your project, or else you can setup a `gulp` task to copy the icon font files at build time into your project.

```js
gulp.task('copy-fonts', function copyFonts () {
  gulp.src('bower_components/underdog-styles/fonts/*')
    .pipe(gulp.dest('dist/fonts/'));
});
```

If you are using the icon font in your project you will also have to override the `$icon-font-path` variable to ensure the fonts get loaded properly.

```sass
$icon-font-path: '/dist/fonts/';
```

### Compiling icon font

Fonts are compiled with [IcoMoon](icomoon.io/app). After importing the SVG icons into IcoMoon, select all of the icons and click `Generate Font` to download a `.zip` archive of the compiled fonts.

The variables for each icon must be updated in `variables/_icons.scss` whenever the fonts are re-generated. You can get Sass variables from IcoMoon by clicking the gear next to the `Download` button that appears after you click `Generate Font`.

![Compiling fonts in IcoMoon](https://github.com/underdogio/underdog-styles/blob/dev/fix.icons/docs/img/IcoMoon%20Tut.gif)

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

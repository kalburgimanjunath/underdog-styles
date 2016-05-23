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

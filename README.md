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

# Start development server
npm start

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
We use a custom icon font which is generated from individual SVGs stored in `icons/*.svg`. The fonts are compiled into `fonts/`.

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
We generate a SASS file `scss/objects/_icons-auto.scss` for the icon font that we generate from a template `icons/_icons-auto.scss`.

Each icon will be named after it's filename prefixed with `icon-`. For example, `icons/github.svg` will be available as `icon-github`.

In order to compile fonts you will need to ensure that [ttfautohint][] is installed, which can be installed on OSX with homebrew:

```bash
brew install ttfautohint
```

To compile fonts, run the following:

```bash
npm run build-icons
```

[ttfautohint]: http://www.freetype.org/ttfautohint/

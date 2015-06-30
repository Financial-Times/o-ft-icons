#o-ft-icons [![Build Status](https://travis-ci.org/Financial-Times/o-ft-icons.png?branch=master)](https://travis-ci.org/Financial-Times/o-ft-icons)

This module has 2 purposes:

1. Provide standard FT-brand icons to Origami-consuming products via a web font and associated CSS classes.
2. Contain SVG icon source files and a means of building an icon web font from these sources.


##To use this module's icons in your product

If not using the [Origami build service](http://financial-times.github.io/ft-origami/docs/developer-guide/build-service/), then add this module as a dependency in your `bower.json`:

```json
"dependencies": {
	"o-ft-icons": "https://github.com/Financial-Times/o-ft-icons.git"
}
```

It is strongly recommended to specify a version tag.

There are two ways to use the icons:

1. Using the predefined CSS classes
2. Extending the predefined Sass placeholders into your own CSS classes

### 1. Using the predefined CSS classes

If you are using the Origami build service to include this module, then this is the only way to use the icons.

If you're not using the build service, then silent mode must be turned off, with the following SASS variable:

```scss
$o-ft-icons-is-silent: false;
```

In this mode, the o-ft-icons SASS will output a base icon CSS class (`o-ft-icons-icon`), and a CSS class for _every_ icon in the module (in the format `o-ft-icons-icon--[name]`).

Both the base class and the individual icon class must be applied to the HTML element, for example:

    <i class="o-ft-icons-icon o-ft-icons-icon--columnists"><i>

### 2. Extending the predefined SASS placeholders into your own CSS classes

Import the `o-ft-icons` SASS and include the font-face like so:

```scss
@import "o-ft-icons/main";

@include oFtIconsFontFace();
```

Then either include the base styles and extend a specific icon's styles into one class...

```scss
.icon-columnists {
	@include oFtIconsBaseIconStyles();
	@extend %o-ft-icons-icon--columnists;
}
```

…or have separate classes for the base styles and the specific icon:

```scss
.icon {
	@include oFtIconsBaseIconStyles();
}

.icon--columnists {
	@extend %o-ft-icons-icon--columnists;
}
```

Then apply both the base icon and individual icon classes in the HTML:

```html
<i class="icon icon--columnists"><i>
```

The latter way is more efficient if you are using more than one icon, as the base styles will not be duplicated for each icon.


##To add or edit icons and build the web font and demo page for Next

1. Add or edit an SVG file to the `svg` folder (see SVG file naming rules).
2. Open a Pull Request to the `next` branch

###SVG version
The icons module uses SVG version 1.1. Files can be created in any vector graphics software. In Adobe Illustrator use the "save as" function and set to version 1.1

###SVG file naming rules

The file must be named according to the following rules:

1. All lower case
2. Contain only letters, numbers and hyphens.
3. No spaces
4. End in `.svg`

Good examples: columnists.svg, back-arrow.svg

Bad examples: RightArrow.svg, linked_in.svg, yahoo!.svg

### IE7 support

IE7 support is handled by an IE7 CSS expression hack, which is bundled into the main icons mixin.

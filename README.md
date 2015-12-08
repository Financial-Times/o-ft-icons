# o-ft-icons [![Build Status](https://travis-ci.org/Financial-Times/o-ft-icons.png?branch=master)](https://travis-ci.org/Financial-Times/o-ft-icons)

Icons with resolution-independent .svg icons and .png fallbacks.

## Quick start

```html
<!-- Load styles from build service  -->
<link rel="stylesheet" href="//build.origami.ft.com/bundles/css?modules=o-ft-icons@4.0.0-beta" />

<!-- In your markup, use the helper classes, such as: -->
<i class="o-ft-icon o-ft-icon--s o-ft-icon--black o-ft-icon--search"></i>
```

[Complete list of available icons](http://build.origami.ft.com/files/o-ft-icons@4.0.0-beta/demos/main.html)

## Advanced usage

There are two ways to use the icons:

1. Using the CSS helper classes
2. Using mixins to create your own classes

### 1. Using the CSS helper classes

```scss
// public/bundle.scss

$o-ft-icons-is-silent: false;
@import "o-ft-icons/main";
```

```html
<!-- In your markup, use the helper classes, such as: -->
<i class="o-ft-icon o-ft-icon--{size} o-ft-icon--{color} o-ft-icon--{symbol}"><i>
```

### 2. Using mixins to create your own classes

```scss
// public/bundle.scss

@import "o-ft-icons/main";

.icon-columnists {
	@include oFtIconsIconStyles();
	// Name of symbol from symbols list
	@include oFtIconsIconSymbol('section-columnists');
}

.icon-columnists--large {
	// Icon size in px or keyword
	@include oFtIconsIconSize('l');
}

.icon-columnists--claret {
	// Name of color from palette
	@include oFtIconsIconColor('claret');
}

.hamburger {
	// Quick use mixin to specify size, color and symbol
	@include oFtIconsIcon('s', 'black', 'hamburger');

	&.is-active {
		@include oFtIconsIconColor('blue');
	}
}
```

```html
<i class="icon-columnists icon-columnists--large-claret"></i>
<i class="hamburger"></i>
```

## Add / edit icons, build the sprite sheet and demo page

The sprite sheets and .png fallbacks have been generated using [a very MVP sprite generation service](https://github.com/i-like-robots/svg-sprite-generator). The source SVG files are contained within this repository.

The very MVP sprite generation service takes the individual source SVG icons and combines them into a single file. When running the service then uses this file to extract and manipulate each icon into a sprite sheet.

### SVG version
The icons module uses SVG version 1.1. Files can be created in any vector graphics software. In Adobe Illustrator use the "save as" function and set to version 1.1

### SVG file naming rules

The file must be named according to the following rules:

1. All lower case
2. Contains only letters, numbers and hyphens (no spaces)
3. Ends with `.svg`

Good: `columnists.svg`, `back-arrow.svg`  
Bad: `RightArrow.svg`, `linked_in.svg`, `yahoo!.svg`

----

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).

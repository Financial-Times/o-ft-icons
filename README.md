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
<i class="o-ft-icon o-ft-icon--{size} o-ft-icon--{colour} o-ft-icon--{icon}"><i>
```

### 2. Using mixins to create your own classes

```scss
// public/bundle.scss

@import "o-ft-icons/main";

.icon-columnists {
	@include oFtIconsIconStyles();
	@include oFtIconsIconName('section-columnists');
}

.icon-columnists--large {
	// Must be a preconfigured size
	@include oFtIconsIconSize('l');
}

.icon-columnists--claret {
	// Named colour from o-colors
	@include oFtIconsIconColor('claret');
}

.icon-hamburger {
	// Quick use mixin to specify size, colour and icon name
	@include oFtIconsIcon('s', 'black', 'hamburger');
}
```

```html
<i class="icon-columnists icon-columnists--large-claret"></i>
```

## Add / edit icons, build the sprite sheet and demo page

### Building the sprite sheet

_TODO_

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

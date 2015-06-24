# Slick JS Meteor Wrapper

**Table of contents**

- [About](#about)
- [Demo](#demo)
- [Installation](#installation)
- [Themes](#themes)
- [Usage](#usage)
- [Example](#example)

## About

[Slick js](http://kenwheeler.github.io/slick) wrapper for [Meteor](http://meteor.com).

The package includes only core js file and core css file. You can use any theme you want.

## Demo
[DEMO](http://slickjs-default-theme.meteor.com) - Slick JS Default Theme Demo

[DEMO](http://slickjs-custom-theme.meteor.com) - Slick JS Custom Theme Demo

## Installation

```sh
meteor add shcherbin:slickjs
```

After installing, you need to copy one of the themes from the **themes** folder to your project or use your own one.

## Themes

### Slick (default)

The default theme has 4 font files, a gif file and a css file. If you want to use it, you need to copy the `.gif` file and `fonts` directory from `themes/slick theme` folder to your `public` folder. You also need to copy the `slick-theme.css` file to you client directory (e.g. `client/styles`). You can check the **examples/slick-theme** folder to see, what it looks like.

### Custom

The custom theme is very lightweight and is pure css. If you want to use it, just copy the `slick-custom.css` from `themes/custom theme` folder to your client directory (e.g. `client/styles`). You can check the **examples/custom-theme** folder to see, what it looks like.

## Usage

You can view and use all available options from the [slick js website](http://kenwheeler.github.io/slick).

## Example

In the **examples** directory you can find two examples, with the default theme and the custom one. Basically, what you need to do it to create a template and in a rendered callback to call `slick` with options.

### Spacebars template

```html
<template name="carousel">
  <div id="carousel">
    <div>
      <img src="https://unsplash.it/500/300?image=0" align="image 0">
    </div>
    <div>
      <img src="https://unsplash.it/500/300?image=1" align="image 1">
    </div>
    <div>
      <img src="https://unsplash.it/500/300?image=2" align="image 2">
    </div>
  </div>
</template>
```

### Client js file

```js
Template.carousel.onRendered(function () {
  this.$('#carousel').slick({
    // options
  });
});
```
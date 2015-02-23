# Slick JS Meteor Wrapper

**Table of contents**

- [About](#about)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)

## About

[Slick js](http://kenwheeler.github.io/slick) wrapper for [Meteor](http://meteor.com).

The package includes only core js file and core css file.

After installing, you need to copy the theme from the **theme** folder to your project or use your own one.

## Installation

```sh
meteor add shcherbin:slickjs
```

## Usage

You can view all available options on the [slick js website](http://kenwheeler.github.io/slick).

## Example

### Spacebars templates

```html
<template name="home">
	<div class="container">
		<div id="carousel">
			{{#each photos}}
				<div>{{> homePhoto}}</div>
			{{/each}}
		</div>
	</div>
</template>

<template name="homePhoto">
	<img src="img/photos/{{slug}}.jpg" alt="{{title}}">
</template>
```

### Client js file

```js
Template.home.rendered = function () {
	$('#carousel').slick({
		dots: true,
		arrows: true,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});
};
```
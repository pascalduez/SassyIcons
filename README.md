# SassyIcons

Flexible system to manipulate icons, SVG, PNG, sprites.  

Works on top of compass sprite tools.  
It was designed to easily switch between SVG and PNG while working with icons as background-images.  
SVG first with PNG sprite fallback, or PNG first with hidpi sprite support.  

## Mixins

`sprite-map-create($name)`  
`icon($name, $sprite [, $offset, $type])`  
`icon-single($name, $sprite [, $type])`  
`icon-generated($name, $sprite [, $type, $pos, $centered])`

## Documentation

**sprite-map-create($name)**  
Create a new sprite map from folder.  

**icon($name, $sprite [, $offset, $type])**  
Main icon mixin.  

**icon-single($name, $sprite [, $type])**  
Embed a single icon as inline-image (no sprite).  
Should be used sporadically.  

**icon-generated($name, $sprite [, $type, $pos, $centered])**  
Include the icon in a generated "pseudo-element". Default to :before.  
Allows for easier positioning or centering.  

*Best workflow used in conjunction with [grunt-svg2png](https://github.com/pascalduez/grunt-svg2png)*

## Configuration

```scss
// Default settings.
$icons-defaults: (
  spacing      : 30px,     // Space around sprites in generated sprite map.
  dir          : "icons",  // Main icons directory. sprite-map-create() allows to use sub dirs.
  dir-png      : "png",    // Name of the png sub-folders.
  dir-hidpi    : "png_2x", // Name of the hidpi png sub-folders.
  hidpi-scale  : 2,        // Scale of the hidpi pngs.
  hidpi-ratio  : 1.3,      // Minimum resolution ratio used in the hidpi media query.
  single-embed : true      // Whether to embed icons as data URI in the icon-single() mixin.
);
```
Override default values in a new `$icons-settings` map.


## Requirements

* Sass ~> 3.3.0
* Compass ~> 1.0.0.alpha.18

## Install

#### Git

```
git clone git@github.com:pascalduez/SassyIcons.git && cd SassyIcons
```

#### npm

```
npm install sassyicons --save
```

#### Example config with [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)

```js
sass: {
  options: {
    bundleExec: true, // Optional usage of Bundler, but recommended.
    compass: true,
    loadPath: ["./node_modules/sassyicons/dist/_SassyIcons.scss"]
  }
}
```

## Roadmap

* More documentation
* `icon-generated()` and `generated()` Don't force absolute positioning.
* Rewrite `generated()` mixin
* Helper mixin to work with `background-size`
* Support for SVG sprites ?
* Support for SVG stacks ?
* Try to further improve output CSS
* More control over print position in the stylesheet ?
* Abstract and move away from compass sprites ?

## Development

### You need

  * [NodeJS](http://nodejs.org)
  * [Ruby](https://www.ruby-lang.org)
  * [Bundler](http://bundler.io) via `gem install bundler`
  * `grunt-cli` via `npm install -g grunt-cli`

### How to

  1. Fork this repository
  2. Run `npm install`
  3. Make your changes + write tests
  4. `grunt test`
  5. Commit + Pull request

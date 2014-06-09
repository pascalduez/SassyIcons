# SassyIcons

Flexible system to manipulate icons, SVG, PNG, sprites.  

Works on top of compass sprite API.  
It was designed to easily switch between SVG and PNG while working with icons as background-images.  
So you have more granular control over which icons to use as SVG or PNG.  
SVG first with PNG sprite fallback, or PNG first with hidpi sprite support.  

Also managing several "thematic" sprites a breeze.  


*Best workflow used in conjunction with [grunt-svg2png](https://github.com/pascalduez/grunt-svg2png).*

*Online [preview](http://pascalduez.github.io/SassyIcons) (test folder).*

## Mixins

`sprite-map-create($name [, $spacing])`  
`icon($name, $sprite [, $offset, $format])`  
`icon-single($name, $sprite [, $format])`  
`icon-generated($name, $sprite [, $pos, $centered, $format])`


## Documentation

**sprite-map-create($name)**  
Create a new sprite map from folder.  

**icon($name, $sprite [, $offset, $format])**  
Main icon mixin.  

**icon-single($name, $sprite [, $format])**  
Embed a single icon as inline-image (no sprite).  
Should be used sporadically.  

**icon-generated($name, $sprite [, $pos, $centered, $format])**  
Include the icon in a generated "pseudo-element". Default to :before.  
Allows for easier positioning or centering.  


## Configuration

```scss
// Default settings.
$icons-defaults: (

  // Space around sprites in generated sprite map.
  // Useful with `$offset` parameter.
  // This setting is global for all sprite-maps.
  // Can be set per sprite-map with the `$spacing` parameter.
  spacing: 0,

  // Main icons directory. sprite-map-create() allows to use sub dirs.
  dir: "icons",

  // Name of the png sub-folders.
  dir-png: "png",

  // Name of the hidpi png sub-folders.
  dir-hidpi: "png_2x",

  // Scale of the hidpi pngs.
  hidpi-scale: 2,

  // Minimum resolution ratio used in the hidpi media query.
  hidpi-ratio: 1.3,

  // Whether to embed icons as data URI in the icon-single() mixin.
  single-embed: true,

  // Default file format unless overridden by parameter, svg | png.
  format: "svg",

  // Whether to support legacy browsers, svg fallback.
  legacy: true

);
```
Override default values in a new `$icons-settings` map.


## Requirements

* Sass ~> 3.3.0
* Compass ~> 1.0.0.alpha.19


## Install

#### Git

```
git clone git@github.com:pascalduez/SassyIcons.git
```

#### npm

```
npm install sassyicons --save
```

#### Bower

```
bower install SassyIcons --save
```

#### Compass extension

1. `bundle install SassyIcons` or `gem install SassyIcons`
2. Add `require 'SassyIcons'` to your `config.rb`
3. Import it in your stylesheets with `@import 'SassyIcons'`


## Usage

*Provided that [path] = path to SassyIcons*

#### Example usage with [Compass](http://compass-style.org/help/tutorials/command-line)
```css
@import 'SassyIcons';
```
```
bundle exec compass watch --import-path [path]/dist
```

#### Example config with [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-sass)

```js
sass: {
  options: {
    bundleExec: true, // Optional usage of Bundler, but recommended.
    compass: true,
    loadPath: ['[path]/dist/_SassyIcons.scss']
  }
}
```


## Roadmap

* More documentation
* `icon-generated()` and `generated()` Don't force absolute positioning.
* Rewrite `generated()` mixin
* `icon-generated()` configurable `calc()` fallback
* Helper mixin to work with `background-size`
* Support for SVG sprites ?
* Support for SVG stacks ?
* Try to further improve output CSS
* More control over print position in the stylesheet ?
* Abstract and move away from compass sprites ?
* Move away from Modernizr classes ? Or make it an option.
* Clarify or remove the `@content` thing to pass additional rules to `.svg`.


## Development

### You need

  * [Node.js](http://nodejs.org)
  * [Ruby](https://www.ruby-lang.org)
  * [Bundler](http://bundler.io) via `gem install bundler`
  * `grunt-cli` via `npm install -g grunt-cli`

### How to

  1. Fork this repository
  2. Run `npm install`
  3. Make your changes + write tests
  4. `grunt test`
  5. Commit + Pull request


## Authors

[Pascal Duez](http://pascalduez.me)


## Licence

SassyIcons is available under the [MIT](http://opensource.org/licenses/MIT) license.

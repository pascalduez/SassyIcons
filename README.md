# SassyIcons

Flexible system to manipulate icons, SVG, PNG, sprites.  

Works on top of compass sprite API.  
It was designed to easily switch between SVG and PNG while working with icons as background-images.  
So you have more granular control over which icons to use as SVG or PNG.  
SVG first with PNG sprite fallback, or PNG first with hidpi sprite support.  

Also managing several "thematic" sprites a breeze.  


*Best workflow used in conjunction with [grunt-svg2png](https://github.com/pascalduez/grunt-svg2png).*

*Online [preview](http://pascalduez.github.io/SassyIcons/test) (test folder).*  
*Online [Documentation](http://pascalduez.github.io/SassyIcons/docs) (generated with SassDoc).*

## API

`sprite-map-create($name [, $spacing])`  
`icon($map, $sprite [, $offset, $format])`  
`icon-single($map, $sprite [, $format])`  
`icon-generated($map, $sprite [, $pos, $centered, $format])`


## Usage

### Requirements

* Sass ~> 3.3.0
* Compass ~> 1.0.0.rc.1

### Installation

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

Since SassyIcons is dependant on Compass, this is the recommended installation and usage.

1. Add `gem 'SassyIcons', '~>0.1.0'` to your `Gemfile`
2. `bundle install --path .` (manage your gems in project dir, not globally)
3. Add `require 'SassyIcons'` to your `config.rb`
4. Import it in your stylesheets with `@import 'SassyIcons'`

### Configuration

```scss
// Default settings.
$icons-defaults: (

  // Space around sprites in generated spritemap.
  // Useful with `$offset` parameter.
  // This setting is global for all spritemaps.
  // Can be set per spritemap with the `$spacing` parameter.
  spacing: 0,

  // Main icons directory. `sprite-map-create()`, base for sub dirs.
  dir: "icons",

  // Name of the png sub-folders.
  dir-png: "png",

  // Name of the hidpi png sub-folders.
  dir-hidpi: "png_2x",

  // Scale of the hidpi pngs.
  hidpi-scale: 2,

  // Minimum resolution ratio used in the hidpi media query.
  hidpi-ratio: 1.3,

  // Whether to embed icons as data URI in the `icon-single()` mixin.
  single-embed: true,

  // Default file format unless overridden by parameter, svg | png.
  format: "svg",

  // Whether to support legacy browsers, svg fallback.
  legacy: true

);
```
Override default values in a new `$icons-settings` map.


## Usage

#### Example usage with [Compass](http://compass-style.org/help/tutorials/command-line)
```scss
// Import SassyIcons.
@import 'SassyIcons';

// Instantiate a new sprite-map from folder `icons/social`.
@include sprite-map-create(social, $spacing: 10px);

.icon--twitter {
  @include icon(social, "twitter");
}

.icon--twitter {
  @include icon-generated(social, "twitter", $format: "png");
}

```
```
bundle exec compass watch
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

## Authors

[Pascal Duez](http://pascalduez.me)


## Licence

SassyIcons is available under the [MIT](http://opensource.org/licenses/MIT) license.

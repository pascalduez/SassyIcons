# SassyIcons

Flexible system to manipulate icons, SVG, PNG, sprites.  

Works on top of compass sprite tools.  
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

Best workflow used in conjunction with [grunt-svg2png](https://github.com/pascalduez/grunt-svg2png)

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

#### Example config with [grunt-contrib-sass](https://github.com/gruntjs/grunt-contrib-compass)

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
* Helper mixin to work with `background-size`
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

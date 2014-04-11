# SassyIcons

Flexible system to manipulate icons, SVG, PNG, sprites.  
SVG first with PNG sprite fallback, or PNG first with hidpi sprite support.  

## Icons mixins

`sprite-map-create()`  
`icon()`  
`icon-single()`  
`icon-generated()`  

## Requirements

* Sass ~> 3.3.0
* Compass ~> 1.0.0.alpha.18

## Install

Work in progress...  

#### Git

```
git clone git@github.com:pascalduez/SassyIcons.git && cd SassyIcons
```

#### Bower

```
bower install SassyIcons --save
```

#### npm

```
npm install sassyicons --save
```

## Roadmap

* Documentation
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
  4. Make your changes + write tests
  3. `grunt test`
  3. `grunt dist`
  5. Commit + Pull request

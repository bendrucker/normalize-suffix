# normalize-suffix [![Build Status](https://travis-ci.org/bendrucker/normalize-suffix.svg?branch=master)](https://travis-ci.org/bendrucker/normalize-suffix) [![Greenkeeper badge](https://badges.greenkeeper.io/bendrucker/normalize-suffix.svg)](https://greenkeeper.io/)

> Normalize an object based on a specified suffix


## Install

```
$ npm install --save normalize-suffix
```


## Usage

```js
var normalize = require('normalize-suffix')

normalize('_id', {
  foo_id: 1,
  baz_id: 2,
  foo: {},
  baz: 3
})
//=> {foo: {id: 1}, baz_id: 2, baz: 3}
```

## API

#### `normalize(suffix, data)` -> `object`

If only `suffix` is supplied, a partially applied function will be returned instead.

##### suffix

*Required*  
Type: `string`

A punctuated suffix (e.g. `_id`) to use for normalization.

##### data

*Required*  
Type: `object`

The data to normalize.


## License

MIT © [Ben Drucker](http://bendrucker.me)

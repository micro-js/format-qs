
# format-qs

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Format a query string from a key-value object

## Installation

    $ npm install @f/format-qs

## Usage

```js
var formatQs = require('@f/format-qs')

formatQs({a: 1, b: 2}) === 'a=1&b=2'
```

## API

### formatQs(params)

- `params` - An object consisting of key/value pairs to be encoded into a URL query string

**Returns:** An encoded query string from the key/values of `params`.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/format-qs.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/format-qs
[git-image]: https://img.shields.io/github/tag/micro-js/format-qs.svg?style=flat-square
[git-url]: https://github.com/micro-js/format-qs
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/format-qs.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/format-qs

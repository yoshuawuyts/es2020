# es2020 [![stability][0]][1]
[![npm version][2]][3] [![downloads][8]][9] [![js-standard-style][10]][11]

`browserify` transform that compiles a selection of ES6 features to valid ES5,
because in hindsight we can do without most of ES6:
- `fat arrows` - make inline functions cute-looking
- `template strings` / `tagged templates` - enable DSLs inside of JS
- `const` - using `const` by default makes it easy to spot where values are
  being redeclared

## Usage
__Via `package.json` (recommended):__
```json
{
  "browserify": {
    "transform": [
      "es2020"
    ]
  }
}
```

__Via CLI:__
```js
$ browserify client.js -t es2020
```

__Via Node API:__
```js
const browserify = require('browserify')
browserify('./client.js')
  .transform('es2020')
  .bundle()
  .pipe(process.stdout)
```

## FAQ
### Is this a joke?
Not really. The TC39 does not represent my interests, and the features they
introduce are not useful for the stuff I'm doing.
[I'm](https://github.com/whatwg/streams)
[bloody](https://docs.google.com/presentation/d/1H3E2ToJ8VHgZS8eS6bRv-vg5OksObj5wv6gyzJJwOK0/edit)
[serious](https://github.com/whatwg/loader). A few good things have been
introduced, so that's what we're backporting to older browsers.

## Can you not?
If the TC39 had an open standards process perhaps this wasn't needed. But as it
stands they're an unwelcoming club, so I get to poke fun at this situation that
otherwise fills me with sadness. Feel free to poke fun at me too. Or if you're
angry that someone would make fun of _the hard work the TC39 has done_, feel
free to ignore this project. Do whatever, I'm doing the same.

## Can you include feature X?
Maybe. Open an issue, make a case and we can discuss it. Just remember that this
project is not democratically governed.

## Installation
```sh
$ npm install es2020
```

## See Also
- [babel-preset-es2020](https://github.com/yoshuawuyts/babel-preset-es2020)
- [es2040](https://github.com/ahdinosaur/es2040)

## License
[MIT](https://tldrlegal.com/license/mit-license)

[0]: https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square
[1]: https://nodejs.org/api/documentation.html#documentation_stability_index
[2]: https://img.shields.io/npm/v/es2020.svg?style=flat-square
[3]: https://npmjs.org/package/es2020
[4]: https://img.shields.io/travis/yoshuawuyts/es2020/master.svg?style=flat-square
[5]: https://travis-ci.org/yoshuawuyts/es2020
[6]: https://img.shields.io/codecov/c/github/yoshuawuyts/es2020/master.svg?style=flat-square
[7]: https://codecov.io/github/yoshuawuyts/es2020
[8]: http://img.shields.io/npm/dm/es2020.svg?style=flat-square
[9]: https://npmjs.org/package/es2020
[10]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[11]: https://github.com/feross/standard

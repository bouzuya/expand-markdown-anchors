# expand-markdown-anchors

expand-markdown-anchors

## Installation

```
$ npm install @bouzuya/expand-markdown-anchors
```

## Usage

```ts
import * as assert from 'assert';
import { expand, init, match } from 'expand-markdown-anchors';

assert.deepStrictEqual(expand('[user/repo][]'), [
  '[user/repo]: https://github.com/user/repo'
]);
assert.deepStrictEqual(match('[user/repo][]'), [
  'user/repo'
]);
assert.deepStrictEqual(expand('[npm:pkg][]'), [
  '[npm:pkg]: https://www.npmjs.com/package/pkg'
]);
assert.deepStrictEqual(expand('[rfc:9999][]'), [
  '[rfc:9999]: https://tools.ietf.org/html/rfc9999'
]);
assert.deepStrictEqual(expand('[vscode:bouzuya.bs-code][]'), [
  '[vscode:bouzuya.bs-code]: https://marketplace.visualstudio.com/items?itemName=bouzuya.bs-code'
]);

// use custom rules

const { expand: myExpand, match: myMatch } = init([
  (s) => s === 'a/b' ? 'http://example.com' : null
]);
assert.deepStrictEqual(myExpand('[text][a/b]'), [
  '[a/b]: http://example.com'
]);
assert.deepStrictEqual(myMatch('[text][a/b]'), ['a/b']);
assert.deepStrictEqual(myMatch('[text][c/d]'), []);
```

## Badges

[![npm version][npm-badge-url]][npm-url]
[![Travis CI][travisci-badge-url]][travisci-url]

[npm-badge-url]: https://img.shields.io/npm/v/@bouzuya/expand-markdown-anchors.svg
[npm-url]: https://www.npmjs.com/package/@bouzuya/expand-markdown-anchors
[travisci-badge-url]: https://img.shields.io/travis/bouzuya/expand-markdown-anchors.svg
[travisci-url]: https://travis-ci.org/bouzuya/expand-markdown-anchors

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([https://bouzuya.net/][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: https://bouzuya.net/

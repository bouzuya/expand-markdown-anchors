# expand-markdown-anchors

expand-markdown-anchors

## Installation

```
$ npm install @bouzuya/expand-markdown-anchors
```

## Usage

```ts
import * as assert from 'assert';
import { expand, match } from 'expand-markdown-anchors';

assert.deepStrictEqual(expand('[user/repo][]'), [
  '[user/repo]: https://github.com/user/repo'
]);
assert.deepStrictEqual(expand('[npm:pkg][]'), [
  '[npm:pkg]: https://www.npmjs.com/package/pkg'
]);
assert.deepStrictEqual(match('[user/repo][]'), [
  'user/repo'
]);
assert.deepStrictEqual(match('[npm:pkg][]'), [
  '[npm:pkg]: https://www.npmjs.com/package/pkg'
]);
```

## Badges

[![Travis CI][travis-ci-badge]][travis-ci]

[travis-ci-badge]: https://img.shields.io/travis/bouzuya/expand-markdown-anchors.svg
[travis-ci]: https://travis-ci.org/bouzuya/expand-markdown-anchors

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][email]&gt; ([http://bouzuya.net][url])

[user]: https://github.com/bouzuya
[email]: mailto:m@bouzuya.net
[url]: http://bouzuya.net

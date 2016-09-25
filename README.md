# expand-markdown-anchors

expand-markdown-anchors

## Usage

```ts
import * as assert from 'assert';
import { expand } from 'expand-markdown-anchors';

assert(expand('[user/repo][]') === '[user/repo]: https://github.com/user/repo');
assert(expand('[npm:pkg][]') === '[npm:pkg]: https://www.npmjs.com/package/pkg');
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

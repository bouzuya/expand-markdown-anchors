import * as assert from 'power-assert';
import beater from 'beater';
import { expand } from '../src/';

const { test } = beater();

const category = 'index > ';

test(category + 'no match', () => {
  assert(expand('[a][]') === '');
});

test(category + 'no implicit', () => {
  assert(expand('[text][a/b]') === '[a/b]: https://github.com/a/b');
});

test(category + 'multiple', () => {
  assert(expand('[a/b][] [c/d][]') ===
    '[a/b]: https://github.com/a/b\n[c/d]: https://github.com/c/d');
});

test(category + 'asin: (amazon)', () => {
  assert(expand('[asin:4798113468][]') ===
    '[asin:4798113468]: https://www.amazon.co.jp/dp/4798113468/');
});

test(category + '9999-99-99 (bbn)', () => {
  assert(expand('[2016-01-02][]') ===
    '[2016-01-02]: http://blog.bouzuya.net/2016/01/02/');
});

test(category + 'user/repo (github)', () => {
  assert(expand('[user/repo][]') ===
    '[user/repo]: https://github.com/user/repo');
});

test(category + 'user/repo#1 (github issue)', () => {
  assert(expand('[user/repo#123][]') ===
    '[user/repo#123]: https://github.com/user/repo/issues/123');
});

test(category + 'npm: (npm)', () => {
  assert(expand('[npm:pkg][]') ===
    '[npm:pkg]: https://www.npmjs.com/package/pkg');
});

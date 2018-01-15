import * as assert from 'power-assert';
import { run, test } from 'beater';
import { expand, match } from '../src/';
import { tests as refsTests } from './refs';

const category = 'index > ';

const tests = [
  test(category + 'no match', () => {
    assert.deepStrictEqual(expand('[a][]'), []);
    assert.deepStrictEqual(match('[a][]'), []);
  }),
  test(category + 'no implicit', () => {
    assert.deepStrictEqual(expand('[text][a/b]'), [
      '[a/b]: https://github.com/a/b'
    ]);
    assert.deepStrictEqual(match('[text][a/b]'), ['a/b']);
  }),
  test(category + 'multiple', () => {
    assert.deepStrictEqual(expand('[a/b][] [c/d][]'), [
      '[a/b]: https://github.com/a/b',
      '[c/d]: https://github.com/c/d'
    ]);
    assert.deepStrictEqual(match('[a/b][] [c/d][]'), [
      'a/b',
      'c/d'
    ]);
  }),
  test(category + 'asin: (amazon)', () => {
    assert.deepStrictEqual(expand('[asin:4798113468][]'), [
      '[asin:4798113468]: https://www.amazon.co.jp/dp/4798113468/'
    ]);
    assert.deepStrictEqual(match('[asin:4798113468][]'), [
      'asin:4798113468'
    ]);
  }),
  test(category + '9999-99-99 (bbn)', () => {
    assert.deepStrictEqual(expand('[2016-01-02][]'), [
      '[2016-01-02]: https://blog.bouzuya.net/2016/01/02/'
    ]);
    assert.deepStrictEqual(match('[2016-01-02][]'), [
      '2016-01-02'
    ]);
  }),
  test(category + 'user/repo (github)', () => {
    assert.deepStrictEqual(expand('[user/repo][]'), [
      '[user/repo]: https://github.com/user/repo'
    ]);
    assert.deepStrictEqual(match('[user/repo][]'), [
      'user/repo'
    ]);
  }),
  test(category + 'user/repo#1 (github issue)', () => {
    assert.deepStrictEqual(expand('[user/repo#123][]'), [
      '[user/repo#123]: https://github.com/user/repo/issues/123'
    ]);
    assert.deepStrictEqual(match('[user/repo#123][]'), [
      'user/repo#123'
    ]);
  }),
  test(category + 'npm: (npm)', () => {
    assert.deepStrictEqual(expand('[npm:pkg][]'), [
      '[npm:pkg]: https://www.npmjs.com/package/pkg'
    ]);
    assert.deepStrictEqual(match('[npm:pkg][]'), [
      'npm:pkg'
    ]);
  }),
  test(category + 'npm: (npm scoped)', () => {
    assert.deepStrictEqual(expand('[npm:@scope/pkg][]'), [
      '[npm:@scope/pkg]: https://www.npmjs.com/package/@scope/pkg'
    ]);
    assert.deepStrictEqual(match('[npm:@scope/pkg][]'), [
      'npm:@scope/pkg'
    ]);
  })
];

run(tests.concat(refsTests)).catch(() => process.exit(1));

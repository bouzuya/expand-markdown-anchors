import * as assert from 'power-assert';
import { test } from 'beater';
import { expand, match } from '../src';

const category = '/ ';
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
  })
];

export { tests };

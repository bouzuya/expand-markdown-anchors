import * as assert from 'power-assert';
import { Test, test } from 'beater';
import { expand, init, match } from '../src';

const category = '/ ';
const tests: Test[] = [
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
  test(category + 'init (empty rules)', () => {
    const { expand, match } = init([]);
    assert.deepStrictEqual(expand('[text][a/b]'), []);
    assert.deepStrictEqual(match('[text][a/b]'), []);
  }),
  test(category + 'init (dummy rule)', () => {
    const { expand, match } = init([
      (s) => s === 'a/b' ? 'http://example.com' : null
    ]);
    assert.deepStrictEqual(expand('[text][a/b]'), [
      '[a/b]: http://example.com'
    ]);
    assert.deepStrictEqual(match('[text][a/b]'), ['a/b']);
    assert.deepStrictEqual(match('[text][c/d]'), []);
  })

];

export { tests };

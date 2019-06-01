import * as assert from 'power-assert';
import { Test, test } from 'beater';
import { expand, match } from '../src';

const category = '/rules ';
const tests: Test[] = [
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
  }),
  test(category + 'pursuit:', () => {
    assert.deepStrictEqual(expand('[pursuit:pkg][]'), [
      '[pursuit:pkg]: https://pursuit.purescript.org/packages/pkg/'
    ]);
    assert.deepStrictEqual(match('[pursuit:purescript-pkg][]'), [
      'pursuit:purescript-pkg'
    ]);
  }),
  test(category + 'rfc:', () => {
    assert.deepStrictEqual(expand('[rfc:9999][]'), [
      '[rfc:9999]: https://tools.ietf.org/html/rfc9999'
    ]);
    assert.deepStrictEqual(match('[rfc:9999][]'), [
      'rfc:9999'
    ]);
  }),
  test(category + 'vscode:', () => {
    assert.deepStrictEqual(expand('[vscode:bouzuya.bs-code][]'), [
      '[vscode:bouzuya.bs-code]: https://marketplace.visualstudio.com/items?itemName=bouzuya.bs-code'
    ]);
    assert.deepStrictEqual(match('[vscode:bouzuya.bs-code][]'), [
      'vscode:bouzuya.bs-code'
    ]);
  })
];

export { tests };

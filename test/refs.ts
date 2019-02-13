import * as assert from 'power-assert';
import { Test, test } from 'beater';
import { refs as f } from '../src/refs';

const patterns = (level: number, chars: string[]): string[] => {
  const range = (n: number): number[] => {
    const r = (a: number[], n: number): number[] => {
      return n === 0 ? a : r([n - 1].concat(a), n - 1);
    };
    return r([], n);
  };
  return range(level - 1).reduce((ps, _) => { // c: '1'
    return ps.concat(ps.reduce((a, s) => a.concat(chars.map((c) => s + c)), [] as string[]));
  }, chars);
};

const category = '/refs ';
const tests: Test[] = [
  test(category + 'simple', () => {
    assert.deepEqual(
      patterns(5, '1[]()'.split(''))
        .map((p) => [p, f(p)])
        .filter(([_, r]) => r.length >= 1),
      [
        ['[1][]', ['1']],
        ['[][1]', ['1']],
        ['[][[]', ['[']],
        ['[][(]', ['(']],
        ['[][)]', [')']],
        ['[(][]', ['(']],
        ['[)][]', [')']]
      ]
    );
  }),
  test(category + 'nested', () => {
    assert.deepEqual(
      patterns(5, '1[]()'.split(''))
        .map((p) => '[' + p + '][2]')
        .filter((p) => p.startsWith('[['))
        .map((p) => [p, f(p)])
        .filter(([_, r]) => r.length >= 2),
      [
        ['[[1][]][2]', ['1', '2']],
        ['[[][1]][2]', ['1', '2']],
        ['[[][[]][2]', ['[', '2']],
        ['[[][(]][2]', ['(', '2']],
        ['[[][)]][2]', [')', '2']],
        ['[[(][]][2]', ['(', '2']],
        ['[[)][]][2]', [')', '2']]
      ]
    );
  }),
  test(category + 'ref with text', () => {
    assert.deepEqual(f('[1][2]'), ['2']);
  })
];

export { tests };

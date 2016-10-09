import { expand as amazon } from './amazon';
import { expand as bbn } from './bbn';
import { expand as github } from './github';
import { expand as npm } from './npm';

const expandOne = (refName: string): string | null => {
  return [
    amazon,
    bbn,
    github,
    npm
  ].reduce((result, expand) => {
    return result === null ? expand(refName) : result;
  }, <string | null>null);
};

const expand = (s: string): string[] => {
  const refs: string[] = [];
  const r = /(?:\[(.+?)\]\[\])|(?:\[.+?\]\[(.+?)\])/g;
  while (true) {
    const m = r.exec(s);
    if (m === null) return refs;
    const refName1: string | undefined = m[1];
    const refName2: string | undefined = m[2];
    const refName = typeof refName1 !== 'undefined'
      ? refName1 : typeof refName2 !== 'undefined'
        ? refName2 : '';
    const ref = expandOne(refName);
    if (ref !== null) refs.push(ref);
  }
};

const match = (s: string): string[] => {
  const refs: string[] = [];
  const r = /(?:\[(.+?)\]\[\])|(?:\[.+?\]\[(.+?)\])/g;
  while (true) {
    const m = r.exec(s);
    if (m === null) return refs;
    const refName1: string | undefined = m[1];
    const refName2: string | undefined = m[2];
    const refName = typeof refName1 !== 'undefined'
      ? refName1 : typeof refName2 !== 'undefined'
        ? refName2 : '';
    const ref = expandOne(refName);
    if (ref !== null) refs.push(refName);
  }
};

export { expand, match };

import { expand as amazon } from './amazon';
import { expand as bbn } from './bbn';
import { expand as github } from './github';
import { expand as npm } from './npm';
import { refs } from './refs';

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
  return refs(s)
    .map((ref) => expandOne(ref))
    .filter((expanded): expanded is string => expanded !== null);
};

const match = (s: string): string[] => {
  return refs(s).filter((ref) => expandOne(ref) !== null);
};

export { expand, match };

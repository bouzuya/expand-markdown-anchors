import { refs } from './refs';
import { expand as amazon } from './rules/amazon';
import { expand as bbn } from './rules/bbn';
import { expand as github } from './rules/github';
import { expand as npm } from './rules/npm';

const expandOne = (refName: string): string | null => {
  return [
    amazon,
    bbn,
    npm,
    github
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

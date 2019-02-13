import { refs } from './refs';
import { expand as amazon } from './rules/amazon';
import { expand as bbn } from './rules/bbn';
import { expand as github } from './rules/github';
import { expand as npm } from './rules/npm';
import { expand as rfc } from './rules/rfc';
import { expand as vscode } from './rules/vscode';

const defaultRules = [
  amazon,
  bbn,
  npm,
  github,
  rfc,
  vscode
];

const expandOne = (refName: string): string | null => {
  return defaultRules.reduce((result, expand) => {
    if (result !== null) return result;
    const expanded = expand(refName);
    return expanded === null
      ? null
      : `[${refName}]: ${expanded}`;
  }, null as string | null);
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

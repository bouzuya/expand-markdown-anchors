import { refs } from './refs';
import { expand as amazon } from './rules/amazon';
import { expand as bbn } from './rules/bbn';
import { expand as github } from './rules/github';
import { expand as npm } from './rules/npm';
import { expand as pursuit } from './rules/pursuit';
import { expand as rfc } from './rules/rfc';
import { expand as vscode } from './rules/vscode';

type Rule = (s: string) => string | null;

const defaultRules: Rule[] = [
  amazon,
  bbn,
  npm,
  pursuit,
  github,
  rfc,
  vscode
];

const makeExpandOne = (rules: Rule[]) => (refName: string): string | null => {
  return rules.reduce((result, expand) => {
    if (result !== null) return result;
    const expanded = expand(refName);
    return expanded === null
      ? null
      : `[${refName}]: ${expanded}`;
  }, null as string | null);
};

const makeExpand = (
  expandOne: (s: string) => string | null
) => (s: string): string[] => {
  return refs(s)
    .map((ref) => expandOne(ref))
    .filter((expanded): expanded is string => expanded !== null);
};

const makeMatch = (
  expandOne: (s: string) => string | null
) => (s: string): string[] => {
  return refs(s).filter((ref) => expandOne(ref) !== null);
};

// ---

const init = (
  rules: Rule[]
): { expand: (s: string) => string[]; match: (s: string) => string[]; } => {
  const expandOne = makeExpandOne(rules);
  const expand = makeExpand(expandOne);
  const match = makeMatch(expandOne);
  return { expand, match };
};

const { expand, match } = init(defaultRules);

export { expand, init, match };

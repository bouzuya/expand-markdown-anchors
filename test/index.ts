import { run, Test } from 'beater';
import { tests as refsTests } from './refs';
import { tests as indexBasicTests } from './index-basic';
import { tests as indexRulesTests } from './index-rules';

const tests = ([] as Test[])
  .concat(indexBasicTests)
  .concat(indexRulesTests)
  .concat(refsTests);

run(tests).catch(() => process.exit(1));

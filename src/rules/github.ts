const expand = (refName: string): string | null => {
  const m = refName.match(/^([^\/]+)\/([^\/#]+)(?:#(\d+))?$/);
  if (m === null) return null;
  const user: string = m[1];
  const repo: string = m[2];
  const issue: string | undefined = m[3];
  return typeof issue === 'undefined'
    ? `https://github.com/${user}/${repo}`
    : `https://github.com/${user}/${repo}/issues/${issue}`;
};

export { expand };

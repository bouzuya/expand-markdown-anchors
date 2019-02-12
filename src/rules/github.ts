const buildUrl = (user: string, repo: string, issue?: string) => {
  if (typeof issue === 'undefined') {
    return `https://github.com/${user}/${repo}`;
  } else {
    return `https://github.com/${user}/${repo}/issues/${issue}`;
  }
};

const expand = (refName: string): string | null => {
  const m = refName.match(/^([^\/]+)\/([^\/#]+)(?:#(\d+))?$/);
  if (m === null) return null;
  const user: string = m[1];
  const repo: string = m[2];
  const issue: string | undefined = m[3];
  return `[${refName}]: ${buildUrl(user, repo, issue)}`;
};

export { expand };

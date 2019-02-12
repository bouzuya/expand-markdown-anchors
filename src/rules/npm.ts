const expand = (refName: string): string | null => {
  const m = refName.match(/^npm:(.+)$/);
  if (m === null) return null;
  const pkg: string = m[1];
  return `[${refName}]: https://www.npmjs.com/package/${pkg}`;
};

export { expand };

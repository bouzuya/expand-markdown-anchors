const expand = (refName: string): string | null => {
  const m = refName.match(/^vscode:([-0-9A-Za-z]+\.[-0-9A-Za-z]+)$/);
  if (m === null) return null;
  const n: string = m[1];
  return `[${refName}]: https://marketplace.visualstudio.com/items?itemName=${n}`;
};

export { expand };

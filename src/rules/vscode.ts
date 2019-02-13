const expand = (refName: string): string | null => {
  const m = refName.match(/^vscode:([-0-9A-Za-z]+\.[-0-9A-Za-z]+)$/);
  if (m === null) return null;
  const ext: string = m[1];
  return `https://marketplace.visualstudio.com/items?itemName=${ext}`;
};

export { expand };

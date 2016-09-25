const expand = (refName: string): string | null => {
  const match = refName.match(/^(\d{4})-(\d{2})-(\d{2})$/);
  if (match === null) return null;
  const y: string = match[1];
  const m: string = match[2];
  const d: string = match[3];
  return `[${refName}]: http://blog.bouzuya.net/${y}/${m}/${d}/`;
};

export { expand };

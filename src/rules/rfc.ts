const expand = (refName: string): string | null => {
  const m = refName.match(/^rfc:(\d+)$/);
  if (m === null) return null;
  const n: string = m[1];
  return `https://tools.ietf.org/html/rfc${n}`;
};

export { expand };

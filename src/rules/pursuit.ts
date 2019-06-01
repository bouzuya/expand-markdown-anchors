const expand = (refName: string): string | null => {
  const m = refName.match(/^pursuit:([-a-z]+)$/);
  if (m === null) return null;
  const pkg: string = m[1];
  return `https://pursuit.purescript.org/packages/${pkg}/`;
};

export { expand };

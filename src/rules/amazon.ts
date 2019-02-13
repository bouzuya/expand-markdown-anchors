const expand = (refName: string): string | null => {
  const m = refName.match(/^asin:(.+)$/);
  if (m === null) return null;
  const asin: string = m[1];
  return `https://www.amazon.co.jp/dp/${asin}/`;
};

export { expand };

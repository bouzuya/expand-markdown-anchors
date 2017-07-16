
const f = (s: string): string[] => {
  const refs: string[] = []; // mutable
  const chars = s.split('');
  const length = chars.length;
  const textIndexes: number[] = []; // mutable
  const linkIndexes: number[] = []; // mutable
  let state: 'out' | 'text' | 'link' = 'out';
  let ref: string | null = null;
  let index = 0;
  while (index < length) {
    switch (chars[index]) {
      case '[':
        {
          switch (state) {
            case 'out':
              textIndexes.push(index + 1);
              state = 'text';
              index = index + 1;
              break;
            case 'text':
              textIndexes.push(index + 1);
              index = index + 1;
              break;
            case 'link':
              index = index + 1;
              break;
            default:
              throw new Error();
          }
        }
        break;
      case ']':
        {
          switch (state) {
            case 'out':
              index = index + 1;
              break;
            case 'text':
              switch (chars[index + 1]) {
                case '[':
                  ref = chars.slice(textIndexes.pop(), index).join('');
                  state = 'link';
                  linkIndexes.push(index + 2);
                  index = index + 2;
                  break;
                case '(':
                  void textIndexes.pop();
                  const i = chars.indexOf(')', index + 1);
                  index = i < 0 ? length : i;
                  break;
                default:
                  void textIndexes.pop();
                  state = 'out';
                  index = index + 1;
              }
              break;
            case 'link':
              const link = chars.slice(linkIndexes.pop(), index).join('');
              const r = ref === '' && link === ''
                ? null
                : link === ''
                  ? ref
                  : link;
              if (r !== null) {
                refs.push(r);
              }
              index = index + 1;
              state = textIndexes.length > 0 ? 'text' : 'out';
              break;
            default:
              throw new Error();
          }
        }
        break;
      default: // other chars
        index = index + 1;
    }
  }
  return refs;
};

export { f as refs };

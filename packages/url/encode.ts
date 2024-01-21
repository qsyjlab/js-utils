export function decode(text: string | number): string {
  try {
    return decodeURIComponent("" + text);
  } catch (err) {
    return "" + text;
  }
}

export function encode(text: string | number): string {
  try {
    return encodeURIComponent("" + text);
  } catch (err) {
    return "" + text;
  }
}

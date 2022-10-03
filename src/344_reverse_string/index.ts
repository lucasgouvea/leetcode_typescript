/**
 Do not return anything, modify s in-place instead.
 */

const string = ["h", "e", "l", "l", "o"];

function reverseString(s: string[]): void {
  let j = s.length - 1;
  let temp;
  for (let i = 0; i < Math.floor(s.length / 2); i++) {
    temp = s[j];
    s[j] = s[i];
    s[i] = temp;
    j--;
  }
}

export { string, reverseString };

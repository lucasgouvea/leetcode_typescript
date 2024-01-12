// Time complexity: O(1) - constant
// Space complexity: O(1) - constant
export function reverseBits(n: number): number {
  const binary = n.toString(2).padStart(32, "0");
  const reversed = binary.split("").reverse().join("");
  return parseInt(reversed, 2);
}

export function reverseBitsBitwise(n: number): number {
  let result = 0;
  for (let i = 0; i < 32; i++) {
    result <<= 1;
    result |= n & 1;
    n >>= 1;
  }
  return result >>> 0;
}

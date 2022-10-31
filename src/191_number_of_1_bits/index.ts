function hammingWeight(n: number): number {
  const binaryString = (n >>> 0).toString(2);
  let count = 0
  for(let i = 0; i < binaryString.length; i++) {
    if(binaryString[i] === "1") {
      count++
    }
  }
  
  return count;
}

function hammingWeightBitwise(n: number): number {
  let count = 0
  for(let i = 0; i < 32; i++) {
    if((n & 1) === 1) {
      count++
    }
    n >>= 1
  }

  return count;
}

export { hammingWeightBitwise };
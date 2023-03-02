export function missingNumber(nums: number[]): number {
    const map = new Map<number, boolean>()
    for(let i = 0; i < nums.length; i ++) {
        map.set(i, false)
    }
    for(const n of nums) {
        map.set(n, true)
    }
    for(const [key, value] of map) {
        if(value === false) {
            return key
        }
    }
    return nums.length
};


// XOR will cancel pair of equal values, E.G: 
// 1) 1 ^ 1 = 0
// 2) 1 ^ 1 ^ 2 = 2
// 3) 1 ^ 1 ^ 2 ^ 2 ^ 5 = 5
// etc
// So, if we XOR all indexes with the values, the missing value will be the resultant,
// since it wont match the corresponding index
export function missingNumberXOR(nums: number[]): number {
    let missingNumber = nums.length

    for(let i = 0; i < nums.length; i ++) {
        missingNumber ^= i ^ nums[i]
    }

    return missingNumber
};


// Its possible to sum all indexes plus the length, all values, and then subtract one from another:
// E.G. [0, 1, 2, 4]
// indexes+length = 0 + 1 + 2 + 3 + 4 = 10
// values = 7
// missing_value = 10 - 7 = 3

export function missingNumberSumItAll(nums: number[]): number {
    let totalIndex = nums.length
    let totalNums = 0

    for(let i = 0; i < nums.length; i++) {
        totalIndex += i
        totalNums += nums[i]
    }
    

    return totalIndex - totalNums
}
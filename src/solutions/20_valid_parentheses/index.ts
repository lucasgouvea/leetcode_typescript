export function isValid(s: string): boolean {
    const stack = []

    for(const char of s) {
        if(char === "(" || char === "{" || char === "[") {
            stack.push(char)
        }
        if(char === "]" && stack.pop() !== "[") {
            return false
        }
        if(char === "}" && stack.pop() !== "{") {
            return false
        }
        if(char === ")" && stack.pop() !== "(") {
            return false
        }
    }

    if(stack.length !== 0) {
        return false
    }

    return true
}
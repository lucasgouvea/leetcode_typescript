
export function calPoints(operations: string[]): number {
    const stack: number[] = []
    for(const op of operations) {
        const opNumber = Number(op)
        if(!isNaN(opNumber)) {
            stack.push(opNumber)
        }
        if(op === "C") {
            stack.pop()
        }
        if(op === "D") {
            const previousValue = stack[stack.length - 1] as number
            stack.push(previousValue * 2)
        }
        if(op === "+") {
            const value1 = stack[stack.length - 1] as number
            const value2 = stack[stack.length - 2] as number
            stack.push(value1 + value2)
        }
    }

    if (stack.length === 0) {
        return 0
    }

    const points = stack.reduce((previousValue: number, currentValue: number) => previousValue + currentValue, 0)
    return points
};
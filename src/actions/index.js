export const increment = (num1) => {
    return {
        type: 'INCREMENT',
        payLoad: num1,
    }
}

export const decrement = (num2) => {
    return {
        type: 'DECREMENT',
        payLoad: num2,
    }
}
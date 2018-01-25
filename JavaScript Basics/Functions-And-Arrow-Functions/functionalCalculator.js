function calculator(a, b, operation) {

    let add = (c, d) => c + d
    let subtract = (c ,d ) => c - d
    let multiply = (c, d) => c * d
    let divide = (c, d) => c / d

    switch(operation){
        case '+': return add(a, b)
        case '-': return subtract(a, b)
        case '*': return multiply(a, b)
        case '/': return divide(a, b)
    }
}

console.log(calculator(5, 10, '+'));
function solve(arrOfNumbersAndOperands) {
    let numbers = []
    let result = ''

    let operands = {
        '*' : (a,b) => a*b ,
        '+' : (a,b) => a + b,
        '-' : (a,b) => a - b,
        '/' : (a,b) => a / b,
    }

    for (let numberAndOperands of arrOfNumbersAndOperands) {
        if(operands[numberAndOperands] !== undefined){
            if(numbers.length < 2){
                result ='Error: not enough operands!';
                break
            }
            let firstNumber = numbers.pop()
            let secondNumber = numbers.pop()
            numbers.push(operands[numberAndOperands](secondNumber,firstNumber))

        }else {
            numbers.push(Number(numberAndOperands));
        }
    }

    if(numbers.length > 1){
       result = "Error: too many operands!"
    }else if(result === ''){
        result = numbers.pop()
    }

    console.log(result)
}

    let input =[-1,
        1,
        '+',
        101,
        '*',
        18,
        '+',
        3,
        '/']




solve(input)

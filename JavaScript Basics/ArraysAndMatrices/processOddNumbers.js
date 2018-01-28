function processOddNumbers(array){
    let result = []
    for (let index in array) {
        if(index % 2 === 1){
            result.unshift(array[index]*2)
        }
    }
    console.log(result.join(' '))
}


function processOddNumbers2(array) {
    let result = array.filter((num,i) => i % 2 === 1).map( x => x*2).reverse()
    return result
}


processOddNumbers([3, 0, 10, 4, 7, 3])
console.log(processOddNumbers2([3, 0, 10, 4, 7, 3]))
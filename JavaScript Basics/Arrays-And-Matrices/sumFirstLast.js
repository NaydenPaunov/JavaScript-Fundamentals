function sumFirstAndLast(array) {
    if(array.length === 1){
        return array[0]*2
    }
    let first = Number(array.shift())
    let last = Number(array.pop())

    return first + last
}

console.log(sumFirstAndLast([5]));
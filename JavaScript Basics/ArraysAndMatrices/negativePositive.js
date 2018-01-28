function sortNegativePositiveNumbers(array) {
    let result = []
    for (let element of array) {
       if(element < 0){
           result.unshift(element)
       }else {
           result.push(element)
       }
    }
    return result
}
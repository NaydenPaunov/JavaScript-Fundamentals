function printNthElement(array) {
    let NthIndex = Number(array.pop()) % array.length

    for (let index  in array) {
        if(index % NthIndex === 0 ){
            console.log(array[index])
        }
    }
}




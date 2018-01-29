function evenPositionElements(array) {
    let result = []

    for (let i = 0; i < array.length; i++) {
        if(i % 2 === 0){
            result.push(array[i])
        }
    }
    console.log(result.join(' '));
}

evenPositionElements(['20', '30', '40'])
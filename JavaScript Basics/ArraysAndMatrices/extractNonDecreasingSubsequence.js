function extractSubsequence(array) {
    let resultArr = [array[0]]

    for (let i = 1; i < array.length; i++) {
        let lastElement = resultArr.pop()
        if( lastElement <= array[i] ){
            resultArr.push(lastElement)
            resultArr.push(array[i])
        }else {
            resultArr.push(lastElement)
        }
    }
    console.log(resultArr.join('\n'))
}

extractSubsequence([-5,10,200,1,150])
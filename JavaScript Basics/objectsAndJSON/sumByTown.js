function sumByTown(townsArr) {
    let resultObj = {}

    for (let i = 0; i < townsArr.length; i += 2) {
        if(resultObj.hasOwnProperty(townsArr[i])){
            resultObj[townsArr[i]] = resultObj[townsArr[i]] + Number(townsArr[i + 1]);
        }else {
            resultObj[townsArr[i]] = Number(townsArr[i+1])
        }
    }
    console.log(JSON.stringify(resultObj));
}

let inputArr = [
    'Sofia', 20,
    'Varna', 3,
    'Sofia', 5,
    'Varna', 4
]
sumByTown(inputArr)
    // sum of the every coll anad row have to be equal
function magicMatrix(matrix) {
    let sum = 0
    let isMagic = false;
    let count =0

    while(count !== matrix.length) {
        let currentColSum = 0
        let currentRowSum = 0

        for (let row = 0; row < matrix.length; row++) {
            currentColSum += matrix[row][count];
        }

        for (let col = 0; col < matrix[0].length; col++) {
            currentRowSum += matrix[count][col];
        }
        if(count === 0){
            sum = currentColSum
        }
        count++

        if(currentColSum !== sum || currentRowSum !== sum){
            return false
        }
    }
    return true

}

console.log(magicMatrix([[11, 32, 45],
    [21, 0, 1],
    [21, 1, 1]]))

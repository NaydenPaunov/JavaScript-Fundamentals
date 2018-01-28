// Write a JS function that generates a Spirally-filled
// matrix with numbers, with given dimensions.
// The input comes as 2 numbers that represent the dimension of the matrix.
// The output is the matrix filled spirally starting from 1.
// You need to print every row on a new line, with the cells
// separated by a space. Check the examples below.

function spiralMatrix(rows,cols) {
    let matrix = filledWithZeros(rows,cols)
    let num = 1
    let rotations = 0;

    while(isFilled(matrix)) {

        for (let topCol = rotations; topCol < matrix[0].length - rotations; topCol++) {
            matrix[rotations][topCol] = num
            num++
        }

        for (let rightRows = 1 + rotations; rightRows < matrix.length - rotations; rightRows++) {
            matrix[rightRows][matrix.length - 1 - rotations] = num
            num++
        }

        for (let bottomCols = matrix.length - 2 - rotations; bottomCols >= rotations; bottomCols--) {
            matrix[matrix.length - 1 - rotations][bottomCols] = num
            num++
        }

        for (let leftRows = matrix.length - 2 - rotations; leftRows >= rotations + 1; leftRows--) {
            matrix[leftRows][rotations] = num
            num++

        }

      rotations++
    }
    
    function isFilled(matrix) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if(matrix[row][col] == 0){
                    return true
                }
            }
        }
        return false
    }

    printMatrix(matrix)

    function printMatrix(matrix){
        let result = ''
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[0].length; col++) {
                result += matrix[row][col] + ' '
            }
            console.log(result)
            result = ''
        }
    }

    function filledWithZeros(rows = 10,cols = 10) {
        let matrix = []
        for (let row = 0; row < rows; row++) {
            matrix.push('0'.repeat(cols).split(''))
        }
        return matrix
    }
}
spiralMatrix(5,5)

function solve(arr , arrOfStrings) {
    let matrix = [];
    let commands = {
        "breeze" : function (rowIndex) {
            for (let col = 0; col < matrix.length; col++) {
                if(matrix[rowIndex][col] - 15 < 0){
                    matrix[rowIndex][col] = 0 ;
                }else {
                    matrix[rowIndex][col] -= 15;
                }

            }
        },
        "gale" : function (colIndex) {
            for (let row = 0; row < matrix.length; row++) {
               if(matrix[row][colIndex] - 20 < 0){
                   matrix[row][colIndex] = 0
               }else {
                   matrix[row][colIndex] -= 20
               }
            }
        },
        "smog" :function (value) {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix.length; col++) {
                    matrix[row][col] += value
                }
            }
        }
    }

    for (let arrRows = 0; arrRows < arr.length; arrRows++) {
        matrix[arrRows] = arr[arrRows].split(' ').map(a => Number(a));
    }

    for (let tokens of arrOfStrings) {
        let [command , index] = tokens.split(' ')
        commands[command](Number(index))
    }

    let pulledAreas = [];
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix.length; col++) {
            if( matrix[row][col] >= 50){
                pulledAreas.push(`[${row}-${col}]`)
            }
        }
    }

    if(pulledAreas.length > 0){
        let result =
        console.log('Polluted areas: ' +pulledAreas.join(', '))
    } else {
        console.log('No polluted areas')
    }
}

let input = [
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ]
  let input2 =   ["breeze 1", "gale 2", "smog 25"]


solve(input,input2)
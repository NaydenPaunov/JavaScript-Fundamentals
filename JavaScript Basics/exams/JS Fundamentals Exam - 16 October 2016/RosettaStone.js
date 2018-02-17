function solve(array) {
    let decodeMatrixLength = Number(array.shift());
    let digitsAccordingToLetters = getLetters();
    let primaryMatrix = []
    let decodeMatrix = []

    for (i = 0; i < decodeMatrixLength; i++) {
        decodeMatrix.push(array.shift().split(' ').map(a => Number(a)));
    }
    for (let i = 0; i < array.length; i++) {
        primaryMatrix.push(array.shift().split(' ').map(a => Number(a)))
        i--
    }

    primaryMatrix = overlayMatrix(primaryMatrix, decodeMatrix)

    // replace with letters and print sentance
    let result = '';
    for (let row = 0; row < primaryMatrix.length; row++) {
        for (let col = 0; col < primaryMatrix[0].length; col++) {
            primaryMatrix[row][col] = digitsAccordingToLetters.get(primaryMatrix[row][col] % 27)
            result += primaryMatrix[row][col]
        }
    }

    console.log(result.trim())

    function overlayMatrix(primaryMatrix, decodeMatrix) {

        for (let row = 0; row < primaryMatrix.length; row++) {
            for (let col = 0; col< primaryMatrix[0].length; col++) {
                let current = primaryMatrix[row][col];
                let modifier = decodeMatrix[row % decodeMatrix.length][col % decodeMatrix[0].length];
                primaryMatrix[row][col] = current + modifier
            }
        }

        return primaryMatrix
        }
        function getLetters() {
            let result = new Map()
            result.set(0, ' ');
            result.set(1, 'A');
            result.set(2, 'B');
            result.set(3, 'C');
            result.set(4, 'D');
            result.set(5, 'E');
            result.set(6, 'F');
            result.set(7, 'G');
            result.set(8, 'H');
            result.set(9, 'I');
            result.set(10, 'J');
            result.set(11, 'K');
            result.set(12, 'L');
            result.set(13, 'M');
            result.set(14, 'N');
            result.set(15, 'O');
            result.set(16, 'P');
            result.set(17, 'Q');
            result.set(18, 'R');
            result.set(19, 'S');
            result.set(20, 'T');
            result.set(21, 'U');
            result.set(22, 'V');
            result.set(23, 'W');
            result.set(24, 'X');
            result.set(25, 'Y');
            result.set(26, 'Z');
            return result
        }
}

let input = ['3',
    '1 3 13',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14']

let input2 = [ '2',
    '59 36',
    '82 52',
    '4 18 25 19 8',
    '4 2 8 2 18',
    '23 14 22 0 22',
    '2 17 13 19 20',
    '0 9 0 22 22' ]


solve(input2)
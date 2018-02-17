function arithmephile(numbers) {
    let biggestSum = -Infinity;

    for (let i = 0; i < numbers.length; i++) {
        let sum = 1;
        let num = Number(numbers[i]);
        if (num >= 10 || num < 0) continue;

        for (let j = i + 1; j < i + 1 + num; j++) {
            if(numbers[j] !== undefined){
                sum *= Number(numbers[j]);
            }
        }

        if(sum > biggestSum){
            biggestSum = sum
        }
    }
    console.log(biggestSum);
}

let input = [ '10', '20', '2', '30', '44', '5', '56', '20', '24' ]
let input2= ['18',
    '42',
    '19',
    '36',
   ' 1',
    '-297',
    '38',
    '100',
   ' 9',
    '-249',
    '-170',
    '-18',
    '-208',
    '-11',
    '-87',
    '-90',
    '-286',
    '-27']
arithmephile(input2)
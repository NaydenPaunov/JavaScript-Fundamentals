function aggregate(array) {
    let result = [];
    let sum = 0
    for (let i = 0; i < array.length; i++) {
        let current = array[i].split('|').filter(a => a !== '');
        result.push(current[0].trim())
        sum += Number(current[1].trim())
    }
    console.log(result.join(', '));
    console.log(sum)

}

aggregate(['| Sofia           | 300',
    '| Veliko Tarnovo  | 500',
    '| Yambol          | 275']
)
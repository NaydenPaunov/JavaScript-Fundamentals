function findVariableNames(sentance) {
    const pattetn = /\b_([a-zA-Z0-9]+)\b(?![-_])/g
    let word = []
    let match ;

    while(match = pattetn.exec(sentance)){
        word.push(match[1])
    }

    console.log(word.join(','));
}

findVariableNames('The _id and _age variables are both integers.')
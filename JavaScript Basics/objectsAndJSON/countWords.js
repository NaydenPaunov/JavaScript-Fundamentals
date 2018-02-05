function countWords(textArr) {
    let text = textArr.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter( a => a.trim() !== '');

    let wordsCount = {}
    for (let word of words) {
        wordsCount.hasOwnProperty(word) ? wordsCount[word]++ : wordsCount[word] = 1;
    }

    return JSON.stringify(wordsCount);
}


let inputArr = ['Far too slow, you\'re far too slow.']
console.log(countWords(inputArr));
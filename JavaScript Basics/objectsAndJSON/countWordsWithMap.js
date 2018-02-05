function countWords(textArr) {
    let text = textArr.join('\n');
    let words = text.split(/[^A-Za-z0-9_]+/).filter( a => a.trim() !== '');

    let wordCount = new Map();

    for (let word of words) {
        word = word.toLowerCase()
        wordCount.has(word) ?
            wordCount.set(word,wordCount.get(word) + 1)  : wordCount.set(word,1);
    }

    let sortedKeys = Array.from(wordCount.keys()).sort();
    for (let key of sortedKeys) {
        console.log("'"+key + "'" + ' -> ' + wordCount.get(key) + ' times')
    }
}


let inputArr = ['Far too slow, you\'re far too slow.']
countWords(inputArr);
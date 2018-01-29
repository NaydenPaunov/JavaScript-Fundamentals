function findOccurrencesOfWord(sentance,word) {
    sentance = sentance.toLowerCase();
    let pattern = new RegExp('\\b' + word + '\\b', 'gi');

    let count = 0
    let match;
    while(match = pattern.exec(sentance)){
        count++
    }
    console.log(count);
}

findOccurrencesOfWord('There was one. Therefore I bought it. I wouldn�t buy it otherwise.\n' ,
    'there')
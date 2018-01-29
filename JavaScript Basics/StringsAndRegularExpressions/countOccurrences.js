function countOccurrences(match, text) {
    let count = 0
    let index = text.indexOf(match)
    while(index > -1){
        count++
        index = text.indexOf(match,index + 1)
    }
    return count
}
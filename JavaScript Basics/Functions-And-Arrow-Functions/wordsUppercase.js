function wordsUppercase(str){
    let strUpper = str.toUpperCase();
    let words = strUpper.split(/\W+/)
    words =  words.filter(w => w != "")
    return words.join(', ')
}

console.log(wordsUppercase('Hi, how are you?'));
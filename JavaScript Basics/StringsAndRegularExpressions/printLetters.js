function printLetters(text) {
    for (let idx = 0; idx < text.length; idx++) {
        console.log(`str[${idx}] -> ${text[idx]}`)
    }
}
printLetters("I love js")
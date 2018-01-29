function matchAllWord(text) {
    console.log(text.split(/\W+/).filter(a => a !== '').join('|'));
}

matchAllWord('A Regular Expression needs to have the global flag in order to match all occurrences in the text')
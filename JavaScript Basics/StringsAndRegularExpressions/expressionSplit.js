function expSplit(text) {
    let pattern = /[\s;.(),\t]/
console.log(text.split(pattern).filter(a => a !== '').join('\n'));
}

expSplit('let sum = 4 * 4,b = "wow";')
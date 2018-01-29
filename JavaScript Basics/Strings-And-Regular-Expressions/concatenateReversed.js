function concatAndReverse(array) {
    console.log(array.join('').split('').reverse().join(''));
}

concatAndReverse(['a','b','c','d'])
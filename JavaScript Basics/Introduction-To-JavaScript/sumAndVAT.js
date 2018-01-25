function sumAndVAT(numbers) {
    let sum = 0
    for (var i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }

    let vat = (sum * 20) / 100
    let total = sum + vat
    console.log('sum = ' + sum)
    console.log('VAT = ' + vat)
    console.log('total = ' + total)
}
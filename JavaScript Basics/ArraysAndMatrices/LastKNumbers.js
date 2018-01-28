function sumLastKNumbersSequence(n, k) {
    let sequence = [1];

    for (let current = 1; current < n; current++) {
        sequence[current] = sequence
            .slice(Math.max(0,current - k ), current + k)
            .reduce((a, b) => {return a + b},0)
    }
    console.log(sequence.join(' '));
}

sumLastKNumbersSequence(8,2)
//Write a JS function that prints the binary logarithm 
// (log 2  x) for each number in the input.

function binaryLogarithm(nums) {
    for (let x of nums) {
        console.log(Math.log2(x));
    }
}
function sliceArray(array) {
    let count = Number(array.shift());

    console.log(array.slice(0,count))
    console.log(array.slice(array.length - count,array.length))
}


sliceArray([2,7, 8, 9])
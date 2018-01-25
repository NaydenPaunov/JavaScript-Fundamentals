
function triangleArea(a,b,c) {
    let p = (a + b +c)/2 // half perimeter

    let area = p*((p - a)*(p - b)*(p - c))
    return Math.sqrt(area)
}
//Write a JS function to calculate how many boxes
// will be needed to fit n bottles if each box fits k bottles.

function boxesAndBottles(numberOfBottles,boxCapacity) {
    let boxesNeeded = Math.ceil(numberOfBottles / boxCapacity)
    return boxesNeeded
}
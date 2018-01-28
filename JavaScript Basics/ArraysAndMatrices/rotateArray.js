function rotateArray(array) {
    let rotationCount = array.pop() % array.length

    for (let i = 0; i < rotationCount; i++) {
          let lastElement = array.pop()
          array.unshift(lastElement)
    }

    console.log(array.join(' '))
}
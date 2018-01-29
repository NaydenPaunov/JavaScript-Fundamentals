function sortArray(array) {
    let a = array.sort((a,b) => a.toLowerCase() > b.toLowerCase()).sort((c,d) => c.length >  d.length)
    console.log(a.join('\n'))
}

sortArray(['alpha'
,'beta'
,'gamma']
)
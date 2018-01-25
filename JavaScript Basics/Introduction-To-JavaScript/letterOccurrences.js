function letterOccurrences(text, letter) {
    let occurrence  = 0 ;
    for (var i = 0; i < text.length; i++) {
        if(text[i] === letter){
            occurrence++
        }
    }
    console.log(occurrence)
}
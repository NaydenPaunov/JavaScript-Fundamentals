function checkStartsWith(text ,substring) {
    let endIndex = substring.length;
    let textSubstring = text.substring(0,endIndex);
    if(textSubstring === substring){
        return true
    }
    return false
}


function checkEndWith(text,substring) {
    let startIndex = text.length - substring.length;
    let textSubstring = text.substring(startIndex,text.length);
    if(textSubstring === substring){
        return true
    }
    return false
}
function round(numberAndprecision) {
    let number = numberAndprecision[0]
    let precision = numberAndprecision[1]

    if(precision > 15 ){
        precision = 15
    }

    return  Math.round(number*(10**precision))/(10**precision)
}

function oddEven(number) {
    if(number % 2 === 0 ){
        return 'even'
    }else if (Math.pow(number % 2,2) === 1){
        return 'odd'
    }else {
        return 'invalid'
    }
}
function modidyAverage(number) {
  let numStr =String(number);
  let getAverage = (numStr) => numStr.split('').map(Number).reduce((a,b) => a + b) / numStr.length ;

  while(getAverage(numStr) <= 5) {
    numStr += '9'
  }

    console.log(numStr);
}

modidyAverage(101)
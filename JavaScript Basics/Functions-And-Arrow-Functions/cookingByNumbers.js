function cookByNumbers(array) {
  let number = array[0]

  let chop =  (number) => number / 2
  let dice  = (number) => Math.sqrt(number)
  let spice = (number) =>  ++number
  let bake  = (number) => number * 3
  let fillet = (number) => number * 0.8

  let functions = {
     'chop' : chop,
     'dice' : dice,
     'spice' : spice,
      'bake' : bake,
      'fillet' : fillet
  }

    for (let i = 1; i < array.length; i++) {
        let operation = array[i]
        let currntFunction = functions[operation]
        number = currntFunction(number)
        console.log(number)
    }
}


cook([32, 'chop', 'chop', 'chop', 'chop', 'chop'])
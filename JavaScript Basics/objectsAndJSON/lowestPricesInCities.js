    function lowestPrices(arrOfStrings) {
        let map = extractData(arrOfStrings);

        let result = ''
        for (let [product,values] of map) {
            let selection = [...values].sort(sortAscending())[0];
            let town = selection[0];
            let price = selection[1]

            result += `${product} -> ${price} (${town})\n`
        }
        console.log(result.trim())

        function sortAscending(a , b) {
            return (a, b) => a[1] - b[1]
        }

        function extractData(arrOfStrings) {
            let map = new Map();
            for (let str of arrOfStrings) {
                let [town,product,price] = str.split(/\s*\|\s*/)

                if(!map.get(product)) {
                    map.set(product,new Map())
                }

                map.get(product).set(town,Number(price))

            }
            return map
        }

    }

let input = [
  ' Sofia City | Audi | 100000',
  ' Sofia City | BMW | 100000',
  ' Sofia City | Mitsubishi | 10000',
  ' Sofia City | Mercedes | 10000',
  ' Sofia City | NoOffenseToCarLovers | 0',
  ' Mexico City | Audi | 1000',
  ' Mexico City | BMW | 99999',
  ' New York City | Mitsubishi | 10000',
  ' New York City | Mitsubishi | 1000',
  ' Mexico City | Audi | 100000',
  ' Washington City | Mercedes | 1000'
];

let input2 = [
   'Sample Town | Sample Product | 1000',
   'Sample Town | Orange | 2',
   'Sample Town | Peach | 1',
   'Sofia | Orange | 3',
   'Sofia | Peach | 2',
   'New York | Sample Product | 1000.1',
   'New York | Burger | 10'
]
lowestPrices(input2)


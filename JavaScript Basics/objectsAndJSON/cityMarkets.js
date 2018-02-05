function cityMarkets(arrOfStrings) {
    let productWithTowns = new Map();

    for (let str of arrOfStrings) {
        let [town,product,quantityPrice] = str.split(/\s*->\s*/)
        let [quantity,price] = quantityPrice.split(/\s*:\s*/)

        let income = Number(quantity) * Number(price)
        if(productWithTowns.has(town)) {
            productWithTowns.get(town).set(product,income)
        }else {
            let newMap = new Map()
            newMap.set(product,income)
            productWithTowns.set(town,newMap)
        }
    }

    print(productWithTowns)

    function print(productWithTowns) {
        let output = '';
        for (let [town, productPrice] of productWithTowns) {
            console.log('Town - ' + town)
            for (let [product,price] of productPrice) {
                console.log(`$$$${product} : ${price}`)
            }
        }
    }


}

let input =[
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Qgodas -> 30000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3']

cityMarkets(input)
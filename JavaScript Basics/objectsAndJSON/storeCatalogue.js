function storeCatogue(arrOfStrings) {
    let letters = new Set();
    let store = new Map();

    for (let str of arrOfStrings) {
        let [name,price] = str.split(/\s*:\s*/)
        letters.add(name[0]);
        store.set(name,price);
    }

    let sortedStore = Array.from(store.keys()).sort()
    let sortedLetters = Array.from(letters.keys()).sort()
    for (let letter of sortedLetters) {
        console.log(letter)
        for (let index of sortedStore) {
            if(index[0] === letter){
                console.log('  '+  index + ': ' + store.get(index) )
            }
        }
    }

}

let input = [
    'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
storeCatogue(input)
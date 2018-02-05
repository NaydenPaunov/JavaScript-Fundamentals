function townsPopulation(arrOfString) {
    let result = new Map()

    for (let str of arrOfString) {
        let [town,population] = str.split(/\s*<->\s*/)
        population = Number(population);
        if(result.has(town)){
            result.set(town,result.get(town) + population);
        }else {
            result.set(town,population)
        }
    }

    for (let key of result.keys()) {
        console.log(key + ' : ' + result.get(key))
    }
}


let inputArr =['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
                ]

townsPopulation(inputArr)
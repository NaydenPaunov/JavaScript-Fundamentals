function autoEnginering(arrOfStrings) {
    let company = new Map()

    for (let str of arrOfStrings) {
        let [carBrand,carModel,producedCars] = str.split(/\s*\|\s*/)
        if(company.has(carBrand)){
            if(company.get(carBrand).has(carModel)){
                let currentCarsProduced = company.get(carBrand).get(carModel)
                company.get(carBrand).set(carModel,currentCarsProduced + Number(producedCars))
            }else{
                company.get(carBrand).set(carModel,Number(producedCars))
            }
        }else{
            let newMap = new Map();
            newMap.set(carModel,Number(producedCars));
            company.set(carBrand,newMap)
        }
    }

    for (let brand of company.keys()) {
        console.log(brand)
        for (let model of company.get(brand).keys()) {
            console.log(`###${model} -> ${company.get(brand).get(model)}`)
        }
    }

}

let input = ['Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]

autoEnginering(input)
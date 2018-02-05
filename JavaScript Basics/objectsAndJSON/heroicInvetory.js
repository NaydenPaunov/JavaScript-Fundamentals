function createHero(arrOfString) {
    let heroes = [];

    for (let str of arrOfString) {
        let [name, level, items] = str.split(/\s\/\s?/g);
        let hero = {}
        if(items === undefined){
            hero = {
                'name': hero,
                'level': Number(level),
                'items': []
            }
        }else {
            hero =  {
                'name' : name,
                'level' : Number(level),
                'items' : items.split(', ')
            }
        }
        heroes.push(hero)
    }
    console.log(JSON.stringify(heroes))
}


let input = ['Isacc / 25 /',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara']
createHero(input)
function parseTownsToJSON(townsArray) {
    let townsArr = [];

    for (let town of townsArray.slice(1)) {
        let [empty, townName, lat, lng] =town.split(/\s*\|\s*/);
        let townObj = {
            Town: townName,
            Latitude: Number(lat),
            Longitude: Number(lng)
        };
        townsArr.push(townObj);
    }
        return JSON.stringify(townsArr);
}


let arr = ['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']
console.log(parseTownsToJSON(arr));
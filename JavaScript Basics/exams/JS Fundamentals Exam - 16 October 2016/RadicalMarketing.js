function solve(arrayOfStrings) {
    let result = {}

    for (let str of arrayOfStrings) {
        if(str.length === 1){
            if(!result[str]){
                result[str] = new Map();
            }
        }else {
            let people = str.split('-')
            let firstPerson = people[0]
            let secondPerson = people[1]
            if(result[firstPerson] && result[secondPerson]){
                if(!result[secondPerson].has(firstPerson) && firstPerson !== secondPerson){
                    result[secondPerson].set(firstPerson);
                }
            }
        }

    }
     let personWithMostSubs = Object.keys(result).sort((a,b) => result[b].size  - result[a].size)[0]
    console.log(personWithMostSubs)

    let count = 1
    for (let [key ,value] of result[personWithMostSubs]) {

        console.log(`${count}. ${key}`);
        count++
    }

}

let input = [
    'A' ,
    'B' ,
    'C' ,
    'D',
    'D',
    'D',
    'A-B',
    'B-A',
    'C-B',
    'C-A' ,
    'D-A' ]


let input2 = [
    "Z",
    "O",
    "R",
    "D",
    "Z-O",
    "R-O",
    "D-O",
    "P",
    "O-P",
    "R-Z",
    "O-Z",
    "D-Z"
];
solve(input)
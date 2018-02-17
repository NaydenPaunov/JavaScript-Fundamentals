function buildAWall(arrayOfWorkers) {
    let  sectionEveryDay = []
    let totalYards = 0;

    while (isReady(arrayOfWorkers)){
        let daySection = 0;
        for (let i = 0; i < arrayOfWorkers.length; i++) {
         if(arrayOfWorkers[i] < 30){
             daySection += 195
             totalYards += 195
             arrayOfWorkers[i]  = Number(arrayOfWorkers[i] ) +  1
         }
        }

    sectionEveryDay.push(daySection)
    }

    console.log(sectionEveryDay.join(', '))
    console.log(totalYards * 1900 + ' pesos')

    function isReady(workers) {
        for (let worker of workers) {
            if(worker < 30){
                return true
            }
        }
        return false
    }
}

let input = [21, 25, 28]
buildAWall(input)
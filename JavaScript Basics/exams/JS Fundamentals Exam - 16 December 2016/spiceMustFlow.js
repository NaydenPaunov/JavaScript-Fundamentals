function solve(startingYield) {
    let daysCount = 0;
    let yieldForTheDay = startingYield;
    let totalYield = 0;

    while(startingYield >= 100){
        yieldForTheDay = startingYield - 26
        totalYield += yieldForTheDay

        daysCount++
        startingYield -= 10;
    }

    if(totalYield > 26){
        totalYield -= 26
    }

    console.log(daysCount)
    console.log(totalYield)
}

solve(200)
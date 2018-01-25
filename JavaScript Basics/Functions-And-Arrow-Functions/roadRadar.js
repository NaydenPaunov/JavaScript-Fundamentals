function roadRadar(input) {
    let speed = Number(input[0])
    let zone = input[1]
    let infraction
    switch(zone){
        case 'motorway' :
            infraction = getInfraction(speed, 130);
            break;
        case 'interstate' :
            infraction = getInfraction(speed, 90);
            break;
        case 'city':
            infraction = getInfraction(speed, 50);
            break;
        case 'residential':
            infraction = getInfraction(speed, 20);
            break;
    }
    if(infraction !== undefined){
        console.log(infraction);
    }
    
    function getInfraction(speed,limit) {
        let overSpeed = speed - limit

        if(overSpeed <= 0 ){
            return
        }else if(overSpeed <= 20){
            return 'speeding'
        }else if(overSpeed <= 40){
            return 'excessive speeding'
        }else {
            return 'reckless driving'
        }
    }
}

roadRadar([21, 'residential'])
function addAndRemoveCommands(commands) {
    let initialNumber = 1
    let result = []
    let command = {
         add : (num) => result.push(num),
         remove : (num) => result.pop()
    }

    for (let comm of commands) {
        command[comm](initialNumber)
        initialNumber++
    }

    if(result.length === 0){
        console.log('Empty');
    }else{
        result.forEach( a => console.log(a))
    }

}

addAndRemoveCommands(['add','add','remove','add','add'])
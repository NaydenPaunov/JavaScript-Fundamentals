
function solve(input) {
    let x ,y ,z
    for (let i = 0; i < input.length; i+=3) {
        x = input[i]
        y = input[i + 1]
        z = input[i + 2]
        inVolume(x,y,z)
    }

    function  inVolume(x, y, z) {
        let x1 = 10, x2 = 50
        let y1 = 20, y2 = 80
        let z1 = 15, z2 = 50

        if(x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    console.log('inside')
                    return
                }
            }
        }
        console.log('outside')
        return
    }
}

solve([13.1, 50, 31.5,50, 80, 50,-5, 18, 43])
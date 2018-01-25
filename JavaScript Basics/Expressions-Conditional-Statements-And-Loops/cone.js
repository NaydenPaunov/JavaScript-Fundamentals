//function to calculate a cone’s
// volume and surface area by
// given height and radius at the base.

function cone(radius,height) {
    //Slant height of a cone
    let s = Math.sqrt(radius * radius + height * height)

    // Lateral surface area of a cone
    let l = Math.PI * radius * s

    //Base surface area of a cone
    let b = Math.PI*radius*radius

    let volume = (1/3)*Math.PI*(radius*radius)*height
    let area = l + b;

    console.log(`volume = ${volume} \n area = ${area}`)
}
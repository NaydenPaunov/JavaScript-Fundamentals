function validateEmail(email) {
    let parrern = /^[A-Za-z0-9]+@[a-z]+\.[a-z]{2,2}/
    let isvalid  =parrern.test(email)
    if(isvalid){
        console.log('Valid')
    }else {
        console.log('Invalid')
    }
}

validateEmail('valid@email.bg')
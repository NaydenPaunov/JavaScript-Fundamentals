function autoGenerateFromEmail(arrayOfEmails) {
    let generatedUsernames = []

    for (let i = 0; i < arrayOfEmails.length; i++) {
        let current = arrayOfEmails[i].split('@')
        let firstName = current[0]
        let domainSplit = current[1].split('.')
        let username = firstName.concat('.')

        for (let j = 0 ; j < domainSplit.length; j++) {
            username =  username.concat(domainSplit[j][0])
        }

        generatedUsernames.push(username)
    }
    console.log(generatedUsernames.join(', '))
}

autoGenerateFromEmail(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])
function formFilter(username,email,phoneNumber,arrayOfSentences) {
    let usernameRegex = /<![a-zA-Z]+!>/g
    let emailRegex = /<@[a-zA-Z]+@>/g
    let phoneRegex = /<\+[a-zA-Z]+\+>/g

    arrayOfSentences.forEach(line => {
            line = line.replace(usernameRegex, username);
            line = line.replace(emailRegex, email);
            line = line.replace(phoneRegex, phoneNumber);
            console.log(line);
    })
}

formFilter('pit', 'pit@pit.com', '032746',
    ['I am <!user!>, my email is <@email@>, my phone is <+p+>.'])

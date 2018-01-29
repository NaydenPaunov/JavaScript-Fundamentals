function capitalize(sentance) {
    const pattern = /(\b[a-zA-Z]{1})([a-zA-Z]+)/g

    sentance = sentance.replace(pattern,
        (match, firstLetter, letters) => firstLetter.toUpperCase().concat(letters.toLowerCase()));

    console.log(sentance);
}

capitalize('Was that Easy? tRY thIs onE for SiZe!')

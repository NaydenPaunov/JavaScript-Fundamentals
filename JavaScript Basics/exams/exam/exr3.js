function solve(str) {
    let result = '';

    let surveyDataValidation = /<svg>([A-Za-z<>\s?!@#$%\[\]\-\/0-9_.\.*]+)<\/svg>/g;
    let validateStr =/<svg><cat><text>(?:[A-Za-z<>\s?!@#$%\[\]\-\/0-9_.\.*\r\n'"]*)(?:[\[]([A-Za-z<>\s?!@#$%\[\]\-\/0-9_.\.*\r\n'"]+)[\]])(?:[A-Za-z<>\s?!@#$%\[\]\-\/0-9_.\.*\r\n'"]*)<\/text><\/cat>[ ]*<cat>((<g><val>([0-9A-Za-z]+)<\/val>([0-9]+)<\/g>)+)<\/cat><\/svg>/;
    let gtagsRegex = /(?:(<g><val>([1-9|10]+)<\/val>([0-9]+)<\/g>)+?)/g


    if(!surveyDataValidation.test(str)){
        console.log('No survey found')
        return
    }
    if(!validateStr.test(str)){
        console.log('Invalid format')
        return
    }

    let match = validateStr.exec(str);
    let foodType = match[1];
    let allGTags = match[2];

    if(result === ''){
        result += foodType.trim() + ':'
    }


    let allRatingsSum = 0;
    let totalValue = 0;
    while(gTagsMatch = gtagsRegex.exec(allGTags)){
        let value = gTagsMatch[2];
        let votesCount = gTagsMatch[3];
        if(!value > 10 || value !== 0 ){
            allRatingsSum += votesCount * value;
            totalValue += Number(votesCount)
        }
    }

    let averageRating = Number((allRatingsSum / totalValue).toFixed(2))


    console.log(result + ' ' + averageRating)

}

let input = '<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>'

let noSurvey ='<p>How do you suggest we improve our service?</p><p>More tacos.</p><p>It\'s great, don\'t mess with it!</p><p>I\'d like to have the option for delivery</p>'

let invalidFormat = '<svg><cat><text>Which is your favourite meal from our selection?</text></cat><cat><g><val>Fish</val>15</g><g><val>Prawns</val>31</g><g><val>Crab Langoon</val>12</g><g><val>Calamari</val>17</g></cat></svg>'

let input2 = '<svg><cat><text>How do you rate the special menu? [Food - Special]</text></cat> <cat><g><val>1</val>5</g><g><val>5</val>13</g><g><val>10</val>22</g></cat></svg>'

solve(input)
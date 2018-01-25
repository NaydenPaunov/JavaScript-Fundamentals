function templateFormat(input) {
    let template = '<?xml version="1.0" encoding="UTF-8"?>\n' +
        '<quiz>\n'

    for (let i = 0; i < input.length; i+=2) {
        template += `  <question>\n    ${input[i]}\n  </question>\n`
        template += `  <answer>\n    ${input[i+1]}\n  </answer>\n`
    }
    template += '</quiz>'
    console.log(template);
}

templateFormat(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
)
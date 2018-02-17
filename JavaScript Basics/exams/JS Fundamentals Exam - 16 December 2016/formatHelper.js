function formatText([text]) {
    console.log(text
        .replace(/[ ]*([.,!?:;])[ ]*/g, (match, g1) => `${g1} `)
        .replace(/\.\s*(?=[0-9])/g, (match) => `.`)
        .replace(/"\s*(.+?)\s*"/g, (match, g1) => `"${g1}"`)
        .replace(/([.,!?:;]) (?=[.,!?:;])/g, (match, g1) => g1));
}


let input =['Terribly formatted text . With chaotic spacings." Terrible quoting "! Also this date is pretty confusing : 20 . 12. 16 .']

formatText(input)
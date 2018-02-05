function scoreToHTML(scoreJSON) {
    let arr = JSON.parse(scoreJSON);
    let htmlResult = '<table>\n'

    htmlResult += '  <tr>'
    for (let key of Object.keys(arr[0])) {
        htmlResult += `<th>${key}</th>`
    }
    htmlResult += '</tr>\n'

    for (let obj of arr) {
        htmlResult += '  <tr>'
        for (let key of Object.keys(obj)) {

            htmlResult += `<td>${htmlEscape(obj[key] + '')}</td>`
        }
        htmlResult += '</tr>\n'
    }
    htmlResult += '</table>'
     return htmlResult;

}

function htmlEscape(text) {
    let escapeSymbol = {
        '"': '&quot;',
        '&': '&amp;',
        "'": '&#39;',
        '<': '&lt;',
        '>': '&gt;' };
    return text.replace(/[\"&'<>]/g, ch => escapeSymbol[ch]);
}

console.log(scoreToHTML('[{"name":"Pesho","score":479},' +
    '{"name":"Gosho","score":205}]'));
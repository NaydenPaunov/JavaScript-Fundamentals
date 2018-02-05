function parseJSONToTable(tableJSON) {
    let arr = JSON.parse(tableJSON);
    let htmlTable = '<table>\n'

    htmlTable += '  <tr>'
    for (let key of Object.keys(arr[0])) {
        htmlTable += `<th>${key}</th>`
    }
    htmlTable += '</tr>\n'

    for (let object of arr) {
        htmlTable += '  <tr>'
        for (let key of Object.keys(object)) {
            htmlTable += `<td>${htmlEscape(object[key] + '')}</td>`;
        }
        htmlTable += '</tr>\n';
    }

    htmlTable += '</table>';
    return htmlTable

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

let input = '[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]'
console.log(parseJSONToTable(input));
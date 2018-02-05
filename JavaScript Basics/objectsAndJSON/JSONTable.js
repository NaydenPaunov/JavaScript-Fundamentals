function generateTable(JSONarr) {
    let output = '<table>\n'

    for (let json of JSONarr) {
        let obj = JSON.parse(json)
            output += `  <tr>\n    <td>${obj['name']}</td>\n    <td>${obj['position']}</td>\n    <td>${obj['salary']}</td>\n  <tr>\n`

    }

    output += '</table>'
    console.log(output);
}

let input = [
  '{"name":"Pesho","position":"Promenliva","salary":100000}',
  '{"name":"Teo","position":"Lecturer","salary":1000}',
  '{"name":"Georgi","position":"Lecturer","salary":1000}'
]

generateTable(input)
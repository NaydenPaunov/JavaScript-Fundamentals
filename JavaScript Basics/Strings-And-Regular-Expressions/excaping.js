function htmlList(items) {
    return "<ul>\n" +
        items.map(htmlEscape).map(
            item => `  <li>${item}</li>`).join("\n") +
        "\n</ul>\n";

    function htmlEscape(text) {
        let escapeSymbol = {
            '"': '&quot;',
            '&': '&amp;',
            "'": '&#39;',
            '<': '&lt;',
            '>': '&gt;' };
        return text.replace(/[\"&'<>]/g, ch => escapeSymbol[ch]);
    }
}x

console.log(htmlList(['<b>unescaped text</b>', 'normal text']));
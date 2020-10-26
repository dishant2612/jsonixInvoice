const format = (xml) => {
    let formatted = '';
    let reg = /(>)(<)(\/*)/g;
    xml = xml.replace(reg, '$1\r\n$2$3');
    let pad = 0;

    xml.split('\r\n').forEach(line => {
        let indent = 0;
        if (line.match(/.+<\/\w[^>]*>$/))
            indent = 0;
        else if (line.match(/^<\/\w/) && pad != 0)
            pad -= 1;
        else if (line.match(/^<\w[^>]*[^\/]>.*$/))
            indent = 1;
        else
            indent = 0;

        let padding = '';
        for (let i = 0; i < pad; i++)
            padding += '  ';

        formatted += padding + line + '\n';
        pad += indent;
        // formatted.replace('\r\n', '\n')
    })

    return formatted;
}

module.exports.format = format;
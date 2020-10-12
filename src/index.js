const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    let strMorse = '';
    expr = expr.match(/.{1,10}/g).join(' ');
    console.log(expr);
    morseArr = [];
    //expr = expr.replace(/\*+/g, '*');
    //for (let i = 0; i < expr.length; i += 2) {
    strMorse = expr.replace(/00/g, '').replace(/10/g, '.').replace(/11/g, '-'); //.replace( //g, '*');
    /*if ((expr[i] + expr[i + 1]) === '10') strMorse += '.';
        if ((expr[i] + expr[i + 1]) === '11') strMorse += '-';
        if ((expr[i] + expr[i + 1]) === '00') strMorse += '';
        if (expr[i] === ' ') strMorse += ' ';
        if (expr[i] === '*') {
            strMorse += '*';
            i = i + 8;
        }
    }*/
    console.log(strMorse);
    morseArr = strMorse.trim().split(' ');

    let resultStr = '';
    for (let i = 0; i < morseArr.length; i++) {
        //console.log(morseArr[i]);
        if (morseArr[i] === '**********') {
            resultStr += ' ';
            continue;
        }
        resultStr += MORSE_TABLE[morseArr[i]];
    }
    return resultStr;
}

module.exports = {
    decode
}

//console.log(decode("00000010100000101010**********10101010111010111111")); //hello
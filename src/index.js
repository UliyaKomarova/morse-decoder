const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let lettersArray;
    let result = '';
    let morzeLetter = '';
    // 10 .
    // 11 -

    lettersArray = expr.match(/.{10}/g);
    lettersArray.map((letter) => {
        if (!letter.includes('*')) {
            letter = letter.match(/.{2}/g);
            letter.map((symbol) => {
                morzeLetter = morzeLetter + (symbol === '10' ? '.' : (symbol === '11' ? '-' : ''));
            });
            result = result + MORSE_TABLE[morzeLetter];
        } else {
            result = result + ' ';
        }
        morzeLetter = '';
    });

    return result;
}

module.exports = {
    decode
}
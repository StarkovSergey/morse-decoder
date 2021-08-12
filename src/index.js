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
  const getTwoNumberArrays = (string) => {
    let item = '';
    const array = [];
    for (let i = 0; i < 10; i++) {
      item += string[i];
      if (item.length === 2) {
        array.push(item);
        item = '';
      }
    }
    return array;
  };

  const array = Array.from(expr);
  /* [
  '0', '0', '0', '0', '0',
  '0', '1', '1', '1', '1',
  '0', '0', '0', '0', '0',
  '0', '0', '0', '1', '0'
] */
  const newArray = [];
  let element = '';

  for (let i = 0; i < array.length; i++) {
    element += array[i];
    if (element.length === 10) {
      newArray.push(element);
      element = '';
    }
  }

  // const tenNumbers = newArray.map((item) => Array.from(item));
  const finalArray = newArray.map((item) => {
    if (item === '**********') return [' '];
    return getTwoNumberArrays(item);
  });

  const morseArray = finalArray.map((item) => {
    if (item.length === 1) return item.join('');

    const symbol = item.map((item) => {
      if (item === '00') return '';
      if (item === '10') return '.';
      if (item === '11') return '-';
    });

    return symbol.join('');
  });

  let string = '';

  for (let i = 0; i < morseArray.length; i++) {
    if (morseArray[i] === ' ') string += ' ';
    console.log(morseArray[i]);
    for (const key in MORSE_TABLE) {
      if (key === morseArray[i]) {
        string += MORSE_TABLE[key];
      }
    }
  }

  return string;
}

module.exports = {
    decode
}

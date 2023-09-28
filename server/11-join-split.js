const elements = ["Fire", "Air","Water"];
let rtaFinal = '';
const separator = '--'
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator;
}
console.log('for',rtaFinal);

const rtaFinal2 = elements.join('--');
console.log('join',rtaFinal2);

const title = 'Curso de manipulación de arrays';
const rtaFinal3 = title.split(' ');
const rtaFinal4 = rtaFinal3.join('-').toLowerCase();
console.log('split',rtaFinal3);
console.log('split-join',rtaFinal4);
// Take a phrase in English and translate it into whale talk
// No consonants, only vowels - (no 'y')
// u's and e's are doubled
// Sing the result slowly to speak whale :D

// 1 
const input = 'Chickens are weird';
// 2 
const vowels = ['a', 'e', 'i', 'o', 'u'];
// 3 
let resultArray = [];
// 4 - 10
for (let i = 0; i < input.length; i++) {
  //console.log('i = ' + i);
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      if (input[i] === 'e') {
        resultArray.push('ee');
      } else if (input[i] === 'u') {
        resultArray.push('uu');
      } else {
        resultArray.push(input[i]);
      }
    }
  }
}
// 11 - 12
console.log(resultArray.join('').toUpperCase());

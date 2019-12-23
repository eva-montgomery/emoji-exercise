const findEmoji = require('./findemoji');
const words = process.argv.slice(2);
// console.log(words);

const result = words.map(findEmoji);
console.log(result.join(' '));


// for (let word of words) {
//     const match = emotion.find(emojiObj => word === emojiObj.name);

//         if (match) {
//             console.log(match.emoji);
//         } else {
//             console.log(word)
//         }
// }
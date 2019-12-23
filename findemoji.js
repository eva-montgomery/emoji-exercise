// const emotion = require('emoji-emotion')

// function findEmoji(word) {
//     const match = emotion.find(emojiObj => word === emojiObj.name);

//         if (match) {
//             console.log(match.emoji);
//             return match.emoji;        
//         } else {
//             return word;
//         }
// }
// module.exports = findEmoji;

const emotion = require('emoji-emotion');
const rhymes = require('rhymes');

function getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function findEmoji(word) {
    const match = emotion.find(emojiObj => word === emojiObj.name);

    if (match) {
        return match.emoji;
    } else {
        const rhymingWords = rhymes(word);
        if (rhymingWords.length > 0) {
            const randomIndex = getRandomInt(rhymingWords.length);
            return rhymingWords[randomIndex].word;
        } else {
            return word;
        }
    }
}

module.exports = findEmoji;
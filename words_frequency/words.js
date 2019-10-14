// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.


function topThreeWords(text) {
    let textArray = text.split(" ").filter(word => {
        return word.length > 0
    })
    let memo = {}
    let answer = []

    const isAlpha = ch => {
        return ch.match(/^[a-z'-]+$/i) !== null;
    }

    let wordArray;
    textArray.forEach((word, index) => {
        word.toLowerCase()
        wordArray = word.split('')
        for (let i = 0; i < wordArray.length; i++) {
            if(!isAlpha(wordArray[i])) {
                wordArray.splice(i, 1)
                i -= 1
            }
        }
        textArray[index] = wordArray.join('')
    })    
    textArray.forEach(word => {
        let current = word.toLowerCase()
        if (!memo[current] && isAlpha(current)) {
            memo[current] = 1
        }else if (memo[current] && isAlpha(current)) {
            memo[current] += 1
        }
    })
    const memoVals = Object.values(memo).sort().reverse().slice(0, 3)
    const memoKeys = Object.keys(memo)

    for (let i = 0; i < memoVals.length; i++) {
        memoKeys.forEach(key => {
            if (memo[key] === memoVals[i] && key !== "'") {
                answer.push(key)
                memo[key] = null
            }
        })
    }

    return answer.slice(0, 3)
}

module.exports = { topThreeWords };
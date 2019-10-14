// Write a function that, given a string of text (possibly with punctuation and line-breaks), returns an array of the top-3 most occurring words, in descending order of the number of occurrences.

// Assumptions:
// A word is a string of letters (A to Z) optionally containing one or more apostrophes (') in ASCII. (No need to handle fancy punctuation.)
// Matches should be case-insensitive, and the words in the result should be lowercased.
// Ties may be broken arbitrarily.
// If a text contains fewer than three unique words, then either the top-2 or top-1 words should be returned, or an empty array if a text contains no words.


function topThreeWords(text) {
    let textArray = text.split(" ")
    let answer = []
    let memo = {}

    textArray.forEach(word => {
        let current = word.toLowerCase()

        if (!memo[current]) {
            memo[current] = 1
        }else if (memo[current]) {
            memo[current] += 1
        }
    })

    const memoKeys = Object.keys(memo)
    const isAlpha = ch => {
        return ch.match(/^[a-z]+$/i) !== null;
    }

    memoKeys.forEach(key => {
        if (answer.length < 1 && isAlpha(key)) {
            answer.push(key)
        }
    })
    console.log(answer)
    return answer
}

module.exports = { topThreeWords };
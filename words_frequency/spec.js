const { expect } = require("chai")
const { topThreeWords } = require("./words")
      
describe('word frequency', () => {
    it("should organize words by frequency", () => {
        const testCase = "  //wont won't won't "

        expect(topThreeWords(testCase)).to.deep.equal(["won't", "wont"])
    })
    it("should organize letters by frequency", () => {
        const testCase = "a a c b b"
        const testCase2= "a a a  b  c c  d d d d  e e e e e"

        expect(topThreeWords(testCase)).to.deep.equal(['a','b','c'])
        expect(topThreeWords(testCase2)).to.deep.equal(['e','d','a'])
    })
    it("should organize letters by frequency regardless of caps", () => {
        const testCase = "e e e e DDD ddd DdD: ddd ddd aa aA Aa, bb cc cC e e e"

        expect(topThreeWords(testCase)).to.deep.equal(['e','ddd','aa'])
    })
    it("should return letters and not symbols", () => {
        const testCase = "  , e   .. "

        expect(topThreeWords(testCase)).to.deep.equal(["e"])
    })
    it("should return empty array if no letters or words are given", () => {
        const testCase = "  ... "
        const testCase2 = "  '  "

        expect(topThreeWords(testCase)).to.deep.equal([])
        expect(topThreeWords(testCase2)).to.deep.equal([])
    })
})
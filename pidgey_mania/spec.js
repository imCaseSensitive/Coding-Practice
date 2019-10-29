const { expect } = require("chai")
const { pidgeyCalc } = require('./pidgey')

describe("Tests for pidgey calculator", () => {
    it("should calculate exp for 1 pidgey", () => {
        expect(pidgeyCalc(1, 12)).to.deep.equal(500);
    })
    it("should calculate exp for 13 pidgeys", () => {
        expect(pidgeyCalc(13, 144)).to.deep.equal(6500);
    })
    it("should calculate exp for 10 pidgey", () => {
        expect(pidgeyCalc(10, 63)).to.deep.equal(3000);
    })
    it("should calculate exp for 1 pidgey", () => {
        expect(pidgeyCalc(1, 63)).to.deep.equal(500);
    })
    it("should calculate exp for 63 pidgeys", () => {
        expect(pidgeyCalc(63, 1)).to.deep.equal(2500);
    })
    it("should calculate exp for 0 pidgeys", () => {
        expect(pidgeyCalc(0, 0)).to.deep.equal(0);
    })
  });

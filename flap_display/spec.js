const { expect } = require("chai")
const { flapDisplay } = require("./flaps")
  
describe.only("TestCases", function() {
  
      it("should change CAT to DOG", function() {
          // CAT => DOG
          const rotors = [[1,13,27]]
          expect(flapDisplay(['CAT'], rotors)).to.deep.equal(['DOG'])
      });
  
      it("should change 'HELLO ' to 'WORLD!'", function() {
          // HELLO => WORLD!
          var rotors = [[15,49,50,48,43,13]]
          expect(flapDisplay(['HELLO '], rotors)).to.deep.equal(['WORLD!'])
      });

      it("should change 'CODE' to 'WARS'", function() {
          // CODE => WARS
          var rotors = [[20,20,28,0]]
          expect(flapDisplay(['CODE'], rotors)).to.deep.equal(['WARS'])
      });
  
  });
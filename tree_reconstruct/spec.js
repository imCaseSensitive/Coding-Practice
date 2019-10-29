const { expect } = require("chai")
const { reconstructTree } = require("./tree")

describe("Tree Reconstruction", () => {
    it("Should return the original binary tree given in-order and pre-order arrays", () => {
      expect(reconstructTree([1,2,3,4,5,6],[4,2,1,3,6,5])).to.deep.equal([4,[2,[1,[],[]],[3,[],[]]],[6,[5,[],[]],[]]])
    });
  }); 
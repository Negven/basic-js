const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain.split("~~").length;
  },
  addLink(value) {
    if ([NaN, null, undefined, false, 0].includes(value)) {
      value = value
    }
    else {
      if(!value) {
        value = "";
      }

    }
    if(this.chain.length !== 0) {
      this.chain += "~~";
    }
    this.chain += "( " + value + " )";
    return this;
  },
  removeLink(position) {
    if(!Number.isInteger(position) || position > this.getLength() || position < 1) {
      this.finishChain();
      throw new Error("You can't remove incorrect link!");
    }
    this.chain = this.chain.split("~~")
    this.chain.splice(position - 1, 1);
    this.chain = this.chain.join("~~");
    return this;
  },
  reverseChain() {
    let oldChain = this.chain;
    this.chain = "";
    oldChain.split("~~").forEach(value => {
      if (this.chain !== "") {
          this.chain = "~~" + this.chain;
      }
      this.chain = value + this.chain;
    })
    return this;
  },
  finishChain() {
    let oldChain = this.chain;
    this.chain = "";
    return oldChain;
  },
  chain: "",

};

module.exports = {
  chainMaker
};

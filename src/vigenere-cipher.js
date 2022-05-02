const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct;
  constructor(direct = true) {
    this.direct = direct;
  }
  alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  revers(str) {
    let newStr = "";
    for(let letterId = str.length - 1; letterId >= 0; letterId--) {
      newStr += str[letterId];
    }
    return newStr
  }
  makeRightKey (key, length) {
    let rightKey = ""
    for(let ind = 0; ind < length; ind++ ) {
      rightKey += key[ind % key.length];
    }
    return rightKey
  }
  encrypt(message, key) {
    if(!message || !key) {
      throw new Error("Incorrect arguments!");
    }
    if(!this.direct) message = this.revers(message);
    message = message.toUpperCase();
    let codMessage = "";
    let indexKey = 0;
    key = this.makeRightKey(key, message.length);
    key = key.toUpperCase();
    message.split("").forEach(letter => {
      if(this.alphabet.includes(letter)) {
        let numberKeyLetter = key.charCodeAt(indexKey) - 64;
        let numberMessageLetter = letter.charCodeAt(0) - 64;
        let numberCodeLetter;
        if(numberMessageLetter + numberKeyLetter <= 27){
          numberCodeLetter = numberMessageLetter + numberKeyLetter;
        }
        else {
          numberCodeLetter = (numberKeyLetter + numberMessageLetter) - 26;
        }
        codMessage += String.fromCharCode(numberCodeLetter + 63)
        indexKey++;

      }
      else {
        codMessage += letter;
      }
    })
    return codMessage
  }
  decrypt(code, key) {
    if(!code || !key) {
      throw new Error("Incorrect arguments!");
    }
    if(!this.direct) code = this.revers(code);
    code = code.toUpperCase();
    let rightMessage = "";
    let indexKey = 0;
    key = this.makeRightKey(key, code.length)
    key = key.toUpperCase();
    code.split("").forEach(letter => {
      if(this.alphabet.includes(letter)) {
        let numberKeyLetter = key.charCodeAt(indexKey) - 64;
        let numberCodeLetter = letter.charCodeAt(0) - 64;
        let numberMessageLetter;
        if (numberCodeLetter >= numberKeyLetter) {
          numberMessageLetter = numberCodeLetter - numberKeyLetter;
        } else {
          numberMessageLetter = 26 - numberKeyLetter + numberCodeLetter;
        }
        rightMessage += String.fromCharCode(numberMessageLetter + 65)
        indexKey++;
      }
      else {
        rightMessage += letter;
      }
    })
    return rightMessage;
  }
}

module.exports = {
  VigenereCipheringMachine
};

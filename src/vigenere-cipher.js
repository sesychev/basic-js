const {
  KeySchemaElementFilterSensitiveLog,
} = require("@aws-sdk/client-dynamodb");
const { NotImplementedError } = require("../extensions/index.js");

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
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQletterSletterDLLU!'
 *
 * directMachine.decrypt('AEIHQletterSletterDLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 *
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 *
 * reverseMachine.decrypt('AEIHQletterSletterDLLU!', 'alphonse') => '!NWAD TA KCATTA'
 *
 */
class VigenereCipheringMachine {
  constructor(status = true) {
    this.status = status;
  }

  encrypt(message, key) {
    //throw new NotImplementedError("Not implemented");
    if (message === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let origin = message.split("");
    let regexp = /[A-Z]/gi;
    message = message.match(regexp).join("").toUpperCase();

    key = key.toUpperCase();
    let keyword = this.createKey(message, key);

    let result = "";

    for (let i = 0; i < message.length; i++) {
      let letter = (message[i].charCodeAt(0) + keyword[i].charCodeAt(0)) % 26;
      letter += "A".charCodeAt(0);
      result += String.fromCharCode(letter);
    }
    /*
    result = result.split("");

    for (let i = 0, j = 0; i < origin.length; i++) {
      if (origin[i].match(regexp)) {
        origin[i] = result[j];
        j++;
      }
    }

    return this.status ? origin.join("") : origin.reverse().join("");
    */
    return this.toOrigin(origin, result, regexp);
  }

  decrypt(encryptedMessage, key) {
    //throw new NotImplementedError("Not implemented");
    if (encryptedMessage === undefined || key === undefined) {
      throw new Error("Incorrect arguments!");
    }

    let origin = encryptedMessage.split("");
    let regexp = /[A-Z]/gi;
    encryptedMessage = encryptedMessage.match(regexp).join("").toUpperCase();

    key = key.toUpperCase();
    let keyword = this.createKey(encryptedMessage, key);

    let result = "";

    for (let i = 0; i < encryptedMessage.length; i++) {
      let letter =
        (encryptedMessage[i].charCodeAt(0) - keyword[i].charCodeAt(0) + 26) %
        26;
      letter += "A".charCodeAt(0);
      result += String.fromCharCode(letter);
    }
    /*
    result = result.split("");

    for (let i = 0, j = 0; i < origin.length; i++) {
      if (origin[i].match(regexp)) {
        origin[i] = result[j];
        j++;
      }
    }
    
    return this.status ? origin.join("") : origin.reverse().join("");
*/
    return this.toOrigin(origin, result, regexp);
  }

  createKey(str, key) {
    key = key.split("");
    if (str.length == key.length) return key.join("");
    else {
      let origin = key.length;
      for (let i = 0; i < str.length - origin; i++) {
        key.push(key[i % key.length]);
      }
    }

    return key.join("");
  }

  toOrigin(origin, result, regexp) {
    result = result.split("");
    for (let i = 0, j = 0; i < origin.length; i++) {
      if (origin[i].match(regexp)) {
        origin[i] = result[j];
        j++;
      }
    }

    return this.status ? origin.join("") : origin.reverse().join("");
  }

  reverseString(arr) {
    return arr.reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine,
};

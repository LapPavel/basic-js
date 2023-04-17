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
  constructor(route = true) {
    this.alph = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
    this.route = route;
  };

  encrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');
    let arr =[];
    let index = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (!this.alph.includes(str[i])) {
        arr.push(str[i]);
        continue;
      };
      let crypnum = this.alph.indexOf(str[i]) + this.alph.indexOf(key[index]);
      arr.push(this.alph[crypnum % this.alph.length]);
      index !== key.length - 1 ? index++ : index = 0;
    };
    return this.route ? arr.join('') : arr.reverse().join('');
  };

  decrypt(str, key) {
    if (!str || !key) throw Error('Incorrect arguments!');
    let arr =[];
    let index = 0;
    str = str.toUpperCase();
    key = key.toUpperCase();
    for (let i = 0; i < str.length; i++) {
      if (!this.alph.includes(str[i])) {
        arr.push(str[i]);
        continue;
      };
      let crypnum = this.alph.indexOf(str[i]) - this.alph.indexOf(key[index]);
      arr.push(this.alph[crypnum < 0 ? crypnum + this.alph.length : crypnum % this.alph.length]);
      index !== key.length - 1 ? index++ : index = 0;
    };
    return this.route ? arr.join('') : arr.reverse().join('');
  };
};

module.exports = {
  VigenereCipheringMachine
};

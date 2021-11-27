export default class Card {
  constructor() {
    this.pay = new Map([
      ['visa', [4]],
      ['masterCard', [51, 52, 53, 54, 55]],
      ['discover', [60]],
      ['jcb', [31, 36, 38]],
      ['amExpress', [34, 37]],
      ['mir', [2]],
    ]);
  }

  getPay(searchValue) {
    for (const [key, value] of this.pay.entries()) {
      const find = value.findIndex((e) => e === Number(searchValue));
      if (find !== -1) {
        return key;
      }
    }
    return -1;
  }
}

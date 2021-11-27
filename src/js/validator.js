import Card from './card';
import Interface from './Interface';

export default class Validator {
  constructor(block) {
    this.block = block;
    this.input = this.block.querySelector('input');
    this.button = this.block.querySelector('[data-button=valid]');
    this.card = new Card();
    this.gui = new Interface(block);
  }

  check() {
    this.input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        this.checkCard();
      }
    });

    this.button.addEventListener('click', () => {
      this.checkCard();
    });
  }

  checkCard() {
    this.gui.hideCard();
    this.gui.showMessage('');
    this.card.cardNum = this.input.value;
    if (this.card.luhnAlgorithm()) {
      let searchPay = '';
      if (this.card.cardNum[0] === '2' || this.card.cardNum[0] === '4') {
        searchPay = this.card.cardNum.substring(0, 1);
      } else {
        searchPay = this.card.cardNum.substring(0, 2);
      }
      const systemPay = this.card.getPay(searchPay);
      if (systemPay !== -1) {
        this.gui.showCard(systemPay);
      } else {
        this.gui.showMessage('Payment system not found');
      }
    } else {
      this.gui.showMessage('Сard number is not valid');
    }
  }
}

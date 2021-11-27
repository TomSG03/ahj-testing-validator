import Card from './card';
import Interface from './Interface';

export default class Validator {
  constructor(block) {
    this.block = block;
    this.input = this.block.querySelector('input');
    this.button = this.block.querySelector('span');

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
    const systemPay = this.card.getPay(this.input.value);
    if (systemPay !== -1) {
      this.gui.showCard(systemPay);
    }
  }
}

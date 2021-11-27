export default class Interface {
  constructor(block) {
    this.cards = block.getElementsByClassName('card');
  }

  showCard(code) {
    for (let index = 0; index < [...this.cards].length; index += 1) {
      if ([...this.cards][index].dataset.card === code) {
        [...this.cards][index].classList.remove('gray');
      }
    }
  }

  hideCard() {
    for (let index = 0; index < [...this.cards].length; index += 1) {
      if (![...this.cards][index].classList.contains('gray')) {
        [...this.cards][index].classList.add('gray');
      }
    }
  }
}

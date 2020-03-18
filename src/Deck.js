class Deck {
  constructor(card = []) {
    this.cards = card;
  }

  countcards() {
    return this.cards.length;
  }

}

module.exports = Deck

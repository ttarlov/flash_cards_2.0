class Round {
  constructor(deck) {
    this.deck = deck.cards
  }

  returnCurrentCard() {
    return this.deck.shift()
  }

}

module.exports = Round

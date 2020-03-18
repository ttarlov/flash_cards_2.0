class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
  }

  returnCurrentCard() {
    return this.deck.shift()
  }

  takeTurn() {
    this.turnCount++
  }

}

module.exports = Round

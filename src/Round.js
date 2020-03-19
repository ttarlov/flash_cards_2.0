
const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
  }

  returnCurrentCard() {
    return this.deck.shift()
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    if(turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turnCount++
    turn.giveFeedback();
  }



}

module.exports = Round

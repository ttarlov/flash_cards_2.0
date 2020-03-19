
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


  calculatePercentCorrect() {
    let numOfWrongAnsweres = this.incorrectGuesses.length;
    let numberOfTurns = this.turnCount;
    return Math.floor((((numberOfTurns - numOfWrongAnsweres) / numberOfTurns ) * 100))

  }

  endRound() {
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }


}

module.exports = Round

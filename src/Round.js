const Turn = require('../src/Turn')

class Round {
  constructor(deck) {
    this.deck = deck.cards;
    this.turnCount = 0;
    this.incorrectGuesses = [];
    this.timer = 0;
  }

  returnCurrentCard() {
    return this.deck[this.turnCount]
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.returnCurrentCard())
    if (turn.evaluateGuess() === false) {
      this.incorrectGuesses.push(turn.currentCard.id);
    }
    this.turnCount++
    turn.giveFeedback();
    return turn.giveFeedback();
  }


  calculatePercentCorrect() {
    let numOfWrongAnsweres = this.incorrectGuesses.length;
    let numberOfTurns = this.turnCount;
    return Math.floor((((numberOfTurns - numOfWrongAnsweres) / numberOfTurns) * 100))

  }

  startTimer() {
    this.timer = new Date();
  }

  endTimer() {
    var endTime = new Date();
    var diff = endTime - this.timer
    var seconds = Math.round(diff / 1000);
    var minutes = Math.round(diff / 60000)
    console.log(`
    $*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$
    $*$*$*$*$*$*$*$*$*$*$*$*$*$ The Round took you ${minutes} Minutes and ${seconds} Seconds $*$*$*$*$*$*$*$*$*
    $*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*$*
    `)
  }




  endRound() {
    console.log(`
      ************************************************************************************************
      ****************** ROUND OVER! ** You answered ** ${this.calculatePercentCorrect()}% of the questions correctly! **************
      ************************************************************************************************

                                                (ノಠ益ಠ)ノ彡┻━┻

      `);
    this.endTimer();
    return `** Round over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }


}

module.exports = Round

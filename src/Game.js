const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round')
const Deck = require('../src/Deck')
const Card = require('../src/Card')

class Game {
  constructor() {
    this.currentRound = 0;
    this.cards = []
  }

  printMessage(deck) {
    console.log(`
            *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
            *                                                                                   *
            *                                                                                   *
            *               Welcome to FlashCards! You are playing with ${deck.countCards()} cards.               *
            *                                                                                   *
            *                                  ヽ༼ຈل͜ຈ༽ﾉ                                         *
            *                                                                                   *
            *_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*_*
            `)
  }

  printQuestion(round) {
    util.main(round);
  }


  start() {
    this.currentRound++
    prototypeQuestions.forEach(question => {
      let card = new Card(
        question.id,
        question.question,
        question.answers,
        question.correctAnswer);

        this.cards.push(card)
    })

    const deck = new Deck(this.cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
    round.startTimer();
  }

}

module.exports = Game;

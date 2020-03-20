const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

const Round = require('../src/Round')
const Deck = require('../src/Deck')


class Game {
  constructor() {
    this.currentRound = null;
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
    const deck = new Deck(prototypeQuestions);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck);
    this.printQuestion(round);
    round.startTimer();
  }

}

module.exports = Game;

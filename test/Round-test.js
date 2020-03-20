const chai = require('chai');
const expect = chai.expect;

const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn')

describe('Round', function() {
  let card1;
  let card2;
  let card3;
  let round;
  let deck;
  let turn;

  beforeEach(function() {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });



  it('should be a function', function() {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', function() {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should take a deck of cards in', function() {
    expect(round.deck).to.deep.equal([card1, card2, card3])
  })

  it('Should start with no incorrect guesses', function() {
    expect(round.incorrectGuesses).to.deep.equal([]);
  });

  it('should start with timer at zero', function() {
    expect(round.timer).to.equal(0)
  });

  describe('returnCurrentCard Method', function() {
    it('Should return the first card in the deck', function() {
      expect(round.returnCurrentCard()).to.equal(card1)
    });
  });

  describe('takeTurn Method', function() {
    it('should start with turnCount property at zero', function() {
      expect(round.turnCount).to.equal(0);
    });

    it('should increment turnCount by 1 after taking a turn', function() {
      round.takeTurn();
      expect(round.turnCount).to.equal(1);
    });

    it('should jump to the next card in deck', function() {
      expect(round.deck[round.turnCount]).to.equal(card1);
      round.takeTurn();
      expect(round.deck[round.turnCount]).to.equal(card2);
      round.takeTurn()
      expect(round.deck[round.turnCount]).to.equal(card3);
    });

    it('should store incorrect guess via ID', function() {
      turn = new Turn('pug', card1);
      round.takeTurn('pug');
      expect(round.incorrectGuesses).to.deep.equal([1])
      round.takeTurn('appendix');
      expect(round.incorrectGuesses).to.deep.equal([1, 14])
    });

    it('Should say "Correct, Great Job" if question is answered correctly', function() {
      turn = new Turn('sea otter', card1);
      round.takeTurn('sea otter');
      expect(turn.giveFeedback()).to.equal(" ◕‿◕ Correct, Great Job!")
    });

    it('Should say "Wrong, try again!" if question is answered incorrectly', function() {
      turn = new Turn('pug', card1);
      round.takeTurn('pug');
      expect(turn.giveFeedback()).to.equal(" ಠ_ಠ Wrong, try again!")
    });
  });

  describe('calculatePercentCorrect Method', function() {

    it('Should calculate and return the percentage of correct guesses', function() {
      turn = new Turn('sea otter', card1);
      round.takeTurn('sea otter');
      round.takeTurn('appendix');
      round.takeTurn('Fitzgerald');
      expect(round.calculatePercentCorrect()).to.equal(66)
    });
  });


  describe('endRound Method', function() {

    it('should print a message after round ends with percentage of correctly answered questions', function() {
      turn = new Turn('sea otter', card1);
      round.takeTurn('sea otter');
      round.takeTurn('appendix');
      round.takeTurn('Fitzgerald');
      expect(round.endRound()).to.equal("** Round over! ** You answered 66% of the questions correctly!")
    });


  });


});

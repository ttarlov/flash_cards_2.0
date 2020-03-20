const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game');
const Round = require('../src/Round');
const Deck = require('../src/Deck');
const Card = require('../src/Card');
const Turn = require('../src/Turn');



describe('Game Class', function(){

  let game;
  let card1;
  let card2;
  let card3;
  let deck;
  let round;

    beforeEach(function(){
      game = new Game();
      card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
      card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
      card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
      deck = new Deck([card1, card2, card3])
      round = new Round(deck)
    });

  it('should be a function', function() {
    expect(Game).to.be.a('function');
  });

  it('should be an instance of Game', function() {
    expect(game).to.be.an.instanceof(Game);
  });

  it('currentRound Property should start as null', function(){
      expect(game.currentRound).to.equal(null);
  });


  describe('Start Method', function(){

    it('should start a Round with a full Deck', function(){
      game.start();
      expect(game.currentRound).to.be.an.instanceof(Round);
    });

  });

});

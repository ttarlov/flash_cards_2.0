const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');


describe('Turn', function() {
    let card;
    let turn;

  beforeEach(function(){
    card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    turn = new Turn('object', card)
  });



  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('Should initilize with a guess.', function(){
    expect(turn.guess).to.equal('object');
  });

  it('Should initilize with a current card at play.', function(){
    expect(turn.currentCard).to.equal(card);
  });

  describe('returnGuess Method', function(){

    it('Should return players Guess', function(){
      expect(turn.returnGuess()).to.equal('object')
    });
  });

  describe('returnCard Method', function(){

    it('Should return current card at play', function(){
      expect(turn.returnCard()).to.equal(card)
    });


  });

  describe('evaluateGuess Method', function(){

    it('Should return TRUE if the guess matches the correct answer', function(){
      expect(turn.evaluateGuess()).to.equal(true)
    });

    it('Should return FALSE if the guess DOES NOT match the correct answer', function(){
      turn = new Turn('array', card)
      expect(turn.evaluateGuess()).to.equal(false)
    });
  });


  describe('giveFeedback Method', function(){

    it('should provide positive feedback if correct answer is given', function(){
      expect(turn.giveFeedback()).to.equal("Correct, Great Job!");
    });

    it('should provide negative feedback if incorrect answer is given', function(){
      turn = new Turn('array', card)
      expect(turn.giveFeedback()).to.equal("Wrong, try again!");
    });

  });
  
});

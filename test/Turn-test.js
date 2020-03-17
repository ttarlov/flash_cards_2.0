const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card')
const Turn = require('../src/Turn');


describe('Turn', function() {


  it('should be a function', function() {
    let turn = new Turn();
    expect(Turn).to.be.a('function');
  });

  it('should be an instance of Turn', function() {
    let turn = new Turn();
    expect(turn).to.be.an.instanceof(Turn);
  });

  it('Should initilize with a guess.', function(){
    let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    let turn = new Turn('object', card)
    expect(turn.guess).to.equal('object');
  });

  it('Should initilize with a current card at play.', function(){
    let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
    let turn = new Turn('object', card)
    expect(turn.currentCard).to.equal(card);
  });

  describe('returnGuess Method', function(){
    it('Should return players Guess', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('object', card)
      expect(turn.returnGuess()).to.equal('object')
    });
  });

  describe('returnCard Method', function(){
    it('Should return current card at play', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('object', card)
      expect(turn.returnCard()).to.equal(card)
    });


  });

  describe('evaluateGuess Method', function(){
    it('Should return TRUE if the guess matches the correct answer', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('object', card)
      expect(turn.evaluateGuess()).to.equal(true)
    });

    it('Should return FALSE if the guess DOES NOT match the correct answer', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('array', card)
      expect(turn.evaluateGuess()).to.equal(false)
    });
  });


  describe('giveFeedback Method', function(){
    it('should provide positive feedback if correct answer is given', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('object', card)
      expect(turn.giveFeedback()).to.equal("Correct, Great Job!");
    });

    it('should provide negative feedback if incorrect answer is given', function(){
      let card = new Card(1, "What allows you to define a set of related information using key-value pairs?", ["object", "array", "function"], "object");
      let turn = new Turn('array', card)
      expect(turn.giveFeedback()).to.equal("Wrong, try again!");
    });

  });




});

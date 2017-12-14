const { expect } = require('chai');
const { assert } = require('chai');
const numberGenerator = require('../numberGenerator.js');

describe('numberGenerator', function() {

  it('should be a function', function() {
    expect(numberGenerator).to.be.a('function');
  });

  it('should generate random numbers', function() {
    let array = numberGenerator(500, 4000);
    expect(array.length).to.equal(500);
  });

});
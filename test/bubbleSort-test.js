const { expect } = require('chai');
const { assert } = require('chai');
const bubbleSort = require('../bubbleSort.js');

describe('bubbleSort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort);
  });

  it('should be able to sort small arrays', function() {
    let array = [8, 5];
    bubbleSort(array);
    expect(array).to.deep.equal([5, 8]);
  });

  it('should be able to sort an array of ten numbers', function() {
    let array = [10, 5, 1, 9, 8, 2, 4, 7, 6, 3];
    bubbleSort(array);
    expect(array).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should be able to sort negative numbers', function() {
    let array = [0, -1, -11, -4, -6, -12, -2];
    bubbleSort(array);
    expect(array).to.deep.equal([-12, -11, -6, -4, -2, -1, 0]);
  })
});
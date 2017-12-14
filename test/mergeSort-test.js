const { expect } = require('chai');
const { assert } = require('chai');
const mergeSort = require('../mergeSort.js');
const numberGenerator = require('../numberGenerator.js');

describe('mergeSort', function() {

  it('should be a function', function() {
    expect(mergeSort).to.be.a('function');
  });

  it('should be able to sort small arrays', function() {
    let array = [ 8, 5 ];
    expect(mergeSort(array)).to.deep.equal([5, 8]);
  });

  it('should be able to sort an array of ten numbers', function() {
    let array = [10, 5, 1, 9, 8, 2, 4, 7, 6, 3];
    expect(mergeSort(array)).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });

  it('should be able to sort negative numbers', function() {
    let array = [0, -1, -11, -4, -6, -12, -2];
    expect(mergeSort(array)).to.deep.equal([-12, -11, -6, -4, -2, -1, 0]);
  });

  it('should be able to sort large numbers', function() {
    let array = [5000, 4050, 2100, 4100];
    expect(mergeSort(array)).to.deep.equal([2100, 4050, 4100, 5000])
  });

  it('Should be able to sort a random array of 100 numbers', function() {
    let array = numberGenerator(1, 150, 100);
    let sortedArray = mergeSort(array);

    for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });

  it('Should be able to sort a random array of 1000 numbers', function() {
    let array = numberGenerator(1, 1100, 1000);
    let sortedArray = mergeSort(array);

    for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });

  it('Should be able to sort a random array of 5000 numbers', function() {
    let array = numberGenerator(1, 4900, 5000);
    let sortedArray = mergeSort(array);

    for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });

  it('Should be able to sort a random array of 10000 numbers', function() {
    let array = numberGenerator(1, 9900, 10000);
    let sortedArray = mergeSort(array);

    for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });

  it('Should be able to sort a random array of 11500 numbers', function() {
    let array = numberGenerator(1, 1200, 11500);
    let sortedArray = mergeSort(array);

    for(let i = 0; i < sortedArray.length-1; i++) {
      assert.equal(sortedArray[i] <= sortedArray[i + 1], true);
    };
  });
});
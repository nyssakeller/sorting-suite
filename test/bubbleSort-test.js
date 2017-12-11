const { expect } = require('chai');
const { assert } = require('chai');
const bubbleSort = require('../bubbleSort.js');

describe('bubbleSort', function() {

  it('should be a function', function() {
    assert.isFunction(bubbleSort, true);
  })

})
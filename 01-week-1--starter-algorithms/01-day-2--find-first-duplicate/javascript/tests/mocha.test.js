// Mocha test that I made and installed to this folder
var assert = require('assert');
const findFirstDuplicate = require('../find_first_duplicate');

describe('findFirstDuplicate(arr)', function () {
  it('should return the value of the first duplicate in the input array', function () {
    assert.equal(findFirstDuplicate([1, 2, 2, 3]), 2);
  });

  it('should return -1 if the input array is empty', function () {
    assert.equal(findFirstDuplicate([]), -1)
  });

  it('should return -1 if the input array has only one value', function () {
    assert.equal(findFirstDuplicate([4]), -1)
  });
});
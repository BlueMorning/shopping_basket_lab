const assert = require('assert');
const Item = require('../item.js');

describe('Item', function(){

  let item;

  beforeEach(function(){
    item = new Item('Hagstrom UltraSwede', 420.99, true);
  });

  it('should have a name', function(){
    const actual = item.name;
    assert.strictEqual(actual, 'Hagstrom UltraSwede');
  });

});

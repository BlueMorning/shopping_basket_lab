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
  it('should have a price', function(){
    const actual = item.price;
    assert.strictEqual(actual, 420.99);
  });
  it('should have a BOGOF eligibility', function(){
    const actual = item.isBOGOF;
    assert.strictEqual(actual, true);
  })

});

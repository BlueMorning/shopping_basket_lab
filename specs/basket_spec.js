const assert = require("assert");
const Basket = require("../basket.js")


describe("Basket", function(){

  let basket;

  beforeEach(function(){

    basket = new Basket();

  })

  it('should start with an empty array of items', function(){
    const actual = basket.getItemsCount();
    assert.equal(actual, 0);
  });






})

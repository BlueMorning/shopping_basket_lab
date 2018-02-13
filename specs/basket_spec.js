const assert = require("assert");
const Basket = require("../basket.js")
const Item = require("../item.js")


describe("Basket", function(){

  let basket;
  let item1;
  let item2;

  beforeEach(function(){

    basket = new Basket();
    item1 = new Item('Oreos', 0.89, true);
    item2 = new Item('Curcumin', 9.10, false);
  })

  it('should start with an empty array of items', function(){
    const actual = basket.getItemsCount();
    assert.equal(actual, 0);
  });

  it('should add items to basket', function(){
    basket.addItem(item1);
    basket.addItem(item2);
    const actual = basket.getItemsCount();
    assert.strictEqual(actual, 2);
  })




})

const assert   = require("assert");
const Customer = require("../customer.js")


let customer;


describe("Customer", function() {

  beforeEach(function(){
    customer = new Customer(true);
  });


  it("can have a discount card", function() {
    assert.equal(true, customer.hasDiscountCard)
  });



})

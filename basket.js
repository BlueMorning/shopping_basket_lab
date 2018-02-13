const Basket = function() {
  this.items    = [];
  this.customer = null;
}

Basket.prototype.getItemsCount = function(){
  return this.items.length;
}

Basket.prototype.addItem = function(item){
  this.items.push(item);
}

Basket.prototype.getItem = function(item){
  return this.items.find(function(itemToFind){
    return item === itemToFind;
  });
}

Basket.prototype.removeItem = function(item){
  let indexToRemove = this.items.indexOf(item);
  if(indexToRemove >= 0){
    this.items.splice(indexToRemove, 1);
  }
}

Basket.prototype.calculateTotal = function(){
  let total = 0;
  for(item of this.items){
    total += item.price
  }
  return total;
}

Basket.prototype.calculateTotalWithDiscount = function () {

  let total;

  if(this.calculateTotal() >= 20){
    total = this.calculateTotal() * 0.8;
  }
  else{
    total = this.calculateTotal();
  }

  if(this.customer != null && this.customer.hasDiscountCard){
    total = total*0.95;
  }

  return total;
}

Basket.prototype.getCustomer = function (){
  return this.customer;
}

Basket.prototype.setCustomer = function (customer) {
  this.customer = customer;
}

module.exports = Basket;

const Basket = function() {
  this.items = [];

}

Basket.prototype.getItemsCount = function(){
  return this.items.length;
}


module.exports = Basket;

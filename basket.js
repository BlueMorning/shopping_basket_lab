const Basket = function() {
  this.items = [];

}

Basket.prototype.getItemsCount = function(){
  return this.items.length;
}

Basket.prototype.addItem = function(item){
  this.items.push(item);
}

module.exports = Basket;

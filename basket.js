const Basket = function() {
  this.items = [];

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

module.exports = Basket;

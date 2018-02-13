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

Basket.prototype.removeItem = function(item){
  let indexToRemove = this.items.indexOf(item);
  if(indexToRemove >= 0){
    this.items.splice(indexToRemove, 1);
  }
}

module.exports = Basket;

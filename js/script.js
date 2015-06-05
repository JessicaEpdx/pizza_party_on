function Pizza(cost){
 this.cost = cost

}

Pizza.prototype.addToppings = function(whiteSauce, extraCheese, pepperoni, sausage, ham, mushroom, spinach, pineapple, bellPepper){
  this.whiteSauce = whiteSauce;
  this.extraCheese = extraCheese;
  this.pepperoni = pepperoni * 3;
  this.sausage = sausage * 3;
  this.ham = ham * 3;
  this.mushroom = mushroom * 2;
  this.spinach = spinach * 2;
  this.pineapple = pineapple * 2;
  this.bellPepper = bellPepper * 2;

  this.cost += (this.whiteSauce + this.extraCheese + this.pepperoni + this.sausage + this.ham + this.mushroom + this.spinach + this.pineapple + this.bellPepper);

};

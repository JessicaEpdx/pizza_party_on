function Pizza(quantity, pizzaSize, cost){
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.cost = cost;

  if(pizzaSize === "small"){
    this.cost += 10;
  }else if(pizzaSize === "medium"){
    this.cost += 13;
  }else{
    this.cost += 18;
  };

  if(quantity > 1){
    var newCost = this.cost * quantity;
    this.cost = newCost;
  };
}

Pizza.prototype.addToppings = function(whiteSauce, extraCheese, pepperoni, sausage, ham, mushroom, spinach, pineapple, bellPepper){
  // var meats = [pepperoni, sausage, ham];
  // var veggies = [mushroom, spinach, pineapple, bellPepper];
  // var otherToppings = [whiteSauce, extraCheese];
  //
  // meats.forEach(function(meat){
  //   this.meat = meat * 3;
  //   this.cost += this.meat;
  // });
  //
  // veggies.forEach(function(veggie){
  //   this.veggie = veggie * 2;
  //   this.cost += this.veggie;
  // });
  //
  // otherToppings.forEach(function(otherTopping){
  //   this.otherTopping = otherTopping;
  //   this.cost += this.otherTopping;
  // });
  //
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

var hideMeats = function(){
  $(".meats").hide();
};

var hideVeggies = function(){
  $(".veggies").hide();
};

var hideOthers = function(){
  $(".others").hide();
};

var showMeats = function(){
  $(".meats").slideDown();
};

var showVeggies = function(){
  $(".veggies").slideDown();
};

var showOthers = function(){
  $(".others").slideDown();
};

$(document).ready(function(){

  hideMeats();
  hideVeggies();
  hideOthers();


  $(".meat").click(function(){
    showMeats();
    hideVeggies();
    hideOthers();

  });

  $(".veggie").click(function(){
    showVeggies();
    hideMeats();
    hideOthers();

  });

  $(".other").click(function(){
    showOthers();
    hideVeggies();
    hideMeats();

  });





});

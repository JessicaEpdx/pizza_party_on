function Pizza(quantity, pizzaSize, cost, toppings1, toppings2, toppings3){
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.cost = cost;
  this.toppings1 = toppings1;
  this.toppings2 = toppings2;
  this.toppings3 = toppings3;

  if(pizzaSize === "small"){
    this.cost += 10;
  }else if(pizzaSize === "medium"){
    this.cost += 13;
  }else{
    this.cost += 18;
  };
}

Pizza.prototype.addQuantity = function(quantityAdded){
  this.quantity = quantityAdded

  var newCost = this.cost * quantityAdded
  this.cost = newCost
}

Pizza.prototype.addThree = function(quantityThree, nameThree){
  this.toppings3.push(nameThree);

  var totalTopping = quantityThree * 3;
  this.cost += totalTopping;
};


Pizza.prototype.addTwo = function(quantityTwo, nameTwo){
  this.toppings2.push(nameTwo);

  var totalTopping = quantityTwo * 2;
  this.cost += totalTopping;
};

Pizza.prototype.addOne = function(quantityOne, nameOne){
  this.toppings1.push(nameOne);

  var totalTopping = quantityOne;
  this.cost += totalTopping;
};

var hideMeats = function(){
  $(".meats").fadeOut("fast");
};

var hideVeggies = function(){
  $(".veggies").fadeOut("fast");
};

var hideOthers = function(){
  $(".others").fadeOut("fast");
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

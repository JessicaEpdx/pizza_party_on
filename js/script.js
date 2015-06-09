function Pizza(quantity, pizzaSize, cost){
  this.pizzaSize = pizzaSize;
  this.quantity = quantity;
  this.cost = cost;

  if(pizzaSize === "Small"){
    this.cost += 10;
  }else if(pizzaSize === "Medium"){
    this.cost += 13;
  }else{
    this.cost += 18;
  };

}

Pizza.prototype.addQuantity = function(quantityAdded){
  this.quantity = quantityAdded
  var quantityCost = this.cost * this.quantity
  this.cost = quantityCost
}

Pizza.prototype.addThree = function(quantityThree){
  var totalTopping = quantityThree * 3;
  this.cost += totalTopping;
};


Pizza.prototype.addTwo = function(quantityTwo){
  var totalTopping = quantityTwo * 2;
  this.cost += totalTopping;
};

Pizza.prototype.addOne = function(quantityOne){
var totalTopping = quantityOne;
  this.cost += totalTopping;
};

Pizza.prototype.removeOne = function(){
  this.cost -= 1;
};

Pizza.prototype.removeTwo = function(){
  this.cost -= 2;
};

Pizza.prototype.removeThree = function(){
  this.cost -= 3;
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

var hideAtStart = function(){
  $(".toppings-order-row").hide();
  $(".directions").hide();
  $(".thanks").hide();
  $(".quantity-form").hide();
  $(".quantity-message").hide();
  hideMeats();
  hideVeggies();
  hideOthers();

};


$(document).ready(function(){

	hideAtStart();

  var newPizza = undefined

  $(".size-form").submit(function(event){
    event.preventDefault();
    var sizePizza = $(".size-options").val();
    newPizza = new Pizza(1, sizePizza, 0)

    $(".pizza-size").text(newPizza.quantity + " " + sizePizza + " Pizza")

    $(".pizza-cost").text("$"+newPizza.cost)
    $(".toppings-order-row").fadeIn();
    $(".size-form").hide();
    $(".directions").show();
  });


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

  var addMeat = function(toppingName){
    newPizza.addThree(1, toppingName);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".order-list").append("<li>" + toppingName + " $3</li>");
  };

  $(".meat-click1").click(function(){
    var toppingName= $(".meat-click1").attr('id');
    console.log(toppingName);
    addMeat(toppingName);
  });

  $(".meat-click2").click(function(){
    var toppingName= $(".meat-click2").attr('id');
    addMeat(toppingName);
  });

  $(".meat-click3").click(function(){
    var toppingName= $(".meat-click3").attr('id');
    addMeat(toppingName);
  });

  $(".meat-click4").click(function(){
    var toppingName= $(".meat-click4").attr('id');
    addMeat(toppingName);
  });

  var addVeggie = function(toppingName){
    newPizza.addTwo(1, toppingName);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".order-list").append("<li>" + toppingName + " $2</li>");
  };

  $(".veggie-click1").click(function(){
    var toppingName= $(".veggie-click1").attr('id');
    addVeggie(toppingName);
  });

  $(".veggie-click2").click(function(){
    var toppingName= $(".veggie-click2").attr('id');
    addVeggie(toppingName);
  });

  $(".veggie-click3").click(function(){
    var toppingName= $(".veggie-click3").attr('id');
    addVeggie(toppingName);
  });

  $(".veggie-click4").click(function(){
    var toppingName= $(".veggie-click4").attr('id');
    addVeggie(toppingName);
  });

  var addOther = function(toppingName){
    newPizza.addOne(1, toppingName);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".order-list").append("<li>" + toppingName + " $1</li>");
  };

  $(".other-click1").click(function(){
    var toppingName= $(".other-click1").attr('id');
    addOther(toppingName);
  });

  $(".other-click2").click(function(){
    var toppingName= $(".other-click2").attr('id');
    addOther(toppingName);
  });

  $(".other-click3").click(function(){
    var toppingName= $(".other-click3").attr('id');
    addOther(toppingName);
  });

  $(".other-click4").click(function(){
    var toppingName= $(".other-click4").attr('id');
    addOther(toppingName);
  });

  $(".finish-toppings").click(function(){
	  $(".quantity-form").show();
	  $(".finish-toppings").hide();
	  $(".add-toppings").hide();
	  $(".order").removeClass("col-sm-3");
	  $(".directions").hide();
	  $(".total").addClass("remove-border");
	  $(".quantity-message").show();


  });

  $(".quantity-form").submit(function(event){
    event.preventDefault();
    $(".quantity-form").hide();
    var quantityOfPizzas = parseInt($(".quantity").val());
    newPizza.addQuantity(quantityOfPizzas);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".pizza-size").text(newPizza.quantity + " " + newPizza.pizzaSize + " Pizza")
	  $(".quantity-message").hide();
	  $(".thanks").fadeIn("slow");
  });





});

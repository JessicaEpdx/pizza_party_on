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

  $(".toppings-order-row").hide();
  hideMeats();
  hideVeggies();
  hideOthers();

  var newPizza = undefined
  $(".directions").hide();

  $(".size-form").submit(function(event){
    event.preventDefault();
    var sizePizza = $(".size-options").val();
    newPizza = new Pizza(1, sizePizza, 0, [], [], [])

    $(".pizza-size").text(sizePizza + " pizza!")

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
  }

  $(".meat-click1").click(function(){
    var toppingName= $(".meat-click1").val();
    addMeat(toppingName);
  })

  $(".meat-click2").click(function(){
    var toppingName= $(".meat-click2").val();
    addMeat(toppingName);
  })

  $(".meat-click3").click(function(){
    var toppingName= $(".meat-click3").val();
    addMeat(toppingName);
  })

  $(".meat-click4").click(function(){
    var toppingName= $(".meat-click4").val();
    addMeat(toppingName);
  })

  var addVeggie = function(toppingName){
    newPizza.addTwo(1, toppingName);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".order-list").append("<li>" + toppingName + " $2</li>");
  }

  $(".veggie-click1").click(function(){
    var toppingName= $(".veggie-click1").val();
    addVeggie(toppingName);
  })

  $(".veggie-click2").click(function(){
    var toppingName= $(".veggie-click2").val();
    addVeggie(toppingName);
  })

  $(".veggie-click3").click(function(){
    var toppingName= $(".veggie-click3").val();
    addVeggie(toppingName);
  })

  $(".veggie-click4").click(function(){
    var toppingName= $(".veggie-click4").val();
    addVeggie(toppingName);
  })

  var addOther = function(toppingName){
    newPizza.addOne(1, toppingName);
    $(".pizza-cost").text("$"+newPizza.cost);
    $(".order-list").append("<li>" + toppingName + " $1</li>");
  }

  $(".other-click1").click(function(){
    var toppingName= $(".other-click1").val();
    addOther(toppingName);
  })

  $(".other-click2").click(function(){
    var toppingName= $(".other-click2").val();
    addOther(toppingName);
  })

  $(".other-click3").click(function(){
    var toppingName= $(".other-click3").val();
    addOther(toppingName);
  })

  $(".other-click4").click(function(){
    var toppingName= $(".other-click4").val();
    addOther(toppingName);
  })





});

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

  $(".size-form").submit(function(event){
    event.preventDefault();
    var sizePizza = $(".size-options").val();
    newPizza = new Pizza(1, sizePizza, 0, [], [], [])

    if(sizePizza === "small"){
      $(".pizza-size").text(sizePizza + " pizza $10")
    }else if (sizePizza === "medium"){
      $(".pizza-size").text(sizePizza + " pizza $13")
    }else{
      $(".pizza-size").text(sizePizza + " pizza $18")
    };

    $(".pizza-cost").text("$ "+newPizza.cost)
    $(".toppings-order-row").fadeIn();
    $(".size").hide();

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

  var getToppings3 = function(){
    var toppingsarray = newPizza.toppings3

    toppingsarray.forEach(function(topping){
      $(".order-list").append("<li>" + topping + " $3" + "</li>")
    });
  };

  $(".meat-click1").click(function(){
    var toppingName= $(".meat-click1").val();
    newPizza.addThree(1, toppingName);
    $(".pizza-cost").text("$ "+newPizza.cost)
    getToppings3();
  })

  // $(".meat-click2").click(function(){
  //   var toppingName2= $(".meat-click2").val();
  //   console.log(toppingName2);
  // })
  //
  // $(".meat-click3").click(function(){
  //   var toppingName2= $(".meat-click3").val();
  //   console.log(toppingName2);
  // })
  //
  // $(".meat-click4").click(function(){
  //   var toppingName2= $(".meat-click4").val();
  //   console.log(toppingName2);
  // })
  //





});

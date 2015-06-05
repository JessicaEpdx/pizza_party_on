describe("Pizza", function(){
  it("will return price of pizza with no toppings based on size", function(){
    var newPizza = new Pizza(1, "Small", 0);
    expect(newPizza.cost).to.equal(10);
    var newPizza = new Pizza(1, "Medium", 0);
    expect(newPizza.cost).to.equal(13);
    var newPizza = new Pizza(1, "Large", 0);
    expect(newPizza.cost).to.equal(18);
  });

  it("will return price of multiple pizzas", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addQuantity(2)
    expect(newPizza.cost).to.equal(20);
  });

  it("will add 1 dollar to dollar toppings", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addOne(2)
    expect(newPizza.cost).to.equal(12);
  });

  it("will add 2 dollars to total cost for each vegetable topping", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addTwo(1)
    expect(newPizza.cost).to.equal(12);
  });

  it("will add 3 dollars to total cost for each meat topping", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addThree(3)
    expect(newPizza.cost).to.equal(19);
  });


  it("will remove 3 dollar toppings", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addThree(3);
    expect(newPizza.cost).to.equal(19);
    newPizza.removeThree();
    expect(newPizza.cost).to.equal(16);

  });

  it("will remove 2 dollar toppings", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addTwo(1);
    expect(newPizza.cost).to.equal(12);
    newPizza.removeTwo();
    expect(newPizza.cost).to.equal(10);

  });

  it("will remove 1 dollar toppings", function(){
    var newPizza = new Pizza(1, "Small", 0);
    newPizza.addOne(1);
    expect(newPizza.cost).to.equal(11);
    newPizza.removeOne();
    expect(newPizza.cost).to.equal(10);

  });




});

describe("Pizza", function(){
  it("will return price of pizza with no toppings based on size", function(){
    var newPizza = new Pizza(1, "small", 0);
    expect(newPizza.cost).to.equal(10);
    var newPizza = new Pizza(1, "medium", 0);
    expect(newPizza.cost).to.equal(13);
    var newPizza = new Pizza(1, "large", 0);
    expect(newPizza.cost).to.equal(18);
  });

  it("will return price of multiple pizzas", function(){
    var newPizza = new Pizza(2, "small", 0);
    expect(newPizza.cost).to.equal(20);
  });

  it("will add 3 dollars to total cost for each meat topping", function(){
    var newPizza = new Pizza(1, "small", 0);
    newPizza.addToppings(0, 0, 1, 2, 0, 0, 0, 0, 0)
    expect(newPizza.cost).to.equal(19);
  });

  it("will add 1 dollar to total cost for each white sauce or extra cheese purchase", function(){
    var newPizza = new Pizza(1, "small", 0);
    newPizza.addToppings(1, 1, 0, 0, 0, 0, 0, 0, 0)
    expect(newPizza.cost).to.equal(12);
  });

  it("will add 2 dollars to total cost for each vegetable topping", function(){
    var newPizza = new Pizza(1, "small", 0);
    newPizza.addToppings(1, 1, 0, 0, 0, 0, 0, 0, 0)
    expect(newPizza.cost).to.equal(12);
  });


});

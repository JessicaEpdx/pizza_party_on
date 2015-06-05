describe("Pizza", function(){
  it("will return price of pizza with no toppings based on size", function(){
    var newPizza = new Pizza(1, "small", 0, [], [], []);
    expect(newPizza.cost).to.equal(10);
    var newPizza = new Pizza(1, "medium", 0, [], [], []);
    expect(newPizza.cost).to.equal(13);
    var newPizza = new Pizza(1, "large", 0, [], [], []);
    expect(newPizza.cost).to.equal(18);
  });

  it("will return price of multiple pizzas", function(){
    var newPizza = new Pizza(1, "small", 0, [], [], []);
    newPizza.addQuantity(2)
    expect(newPizza.cost).to.equal(20);
  });

  it("will add 1 dollar to dollar toppings", function(){
    var newPizza = new Pizza(1, "small", 0, [], [], []);
    newPizza.addOne(2, "extra cheese")
    expect(newPizza.cost).to.equal(12);
    expect(newPizza.toppings1).to.eql(["extra cheese"]);
  });

  it("will add 2 dollars to total cost for each vegetable topping", function(){
    var newPizza = new Pizza(1, "small", 0, [], [], []);
    newPizza.addTwo(1, "broccoli")
    expect(newPizza.cost).to.equal(12);
    expect(newPizza.toppings2).to.eql(["broccoli"]);
  });

  it("will add 3 dollars to total cost for each meat topping", function(){
    var newPizza = new Pizza(1, "small", 0, [], [], []);
    newPizza.addThree(3, "sausage")
    expect(newPizza.cost).to.equal(19);
    expect(newPizza.toppings3).to.eql(["sausage"]);
  });


  // it("will remove 3 dollar toppings", function(){
  //   var newPizza = new Pizza(1, "small", 0, [], [], []);
  //   newPizza.addThree(3, "sausage");
  //   expect(newPizza.cost).to.equal(19);
  //   newPizza.removeThree("sausage");
  //   expect(newPizza.toppings3).to.eql(["sausage", "sausage"]);
  //   expect(newPizza.cost).to.equal(19);
  //
  // });




});

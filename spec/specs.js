describe("Pizza", function(){
  it("will return price of pizza with no toppings", function(){
    var newPizza = new Pizza(10);
    expect(newPizza.cost).to.equal(10);
  });

  it("will add 3 dollars to total cost for each meat topping", function(){
    var newPizza = new Pizza(10);
    newPizza.addToppings(0, 0, 1, 2, 0, 0, 0, 0, 0)
    expect(newPizza.cost).to.equal(19);
  });

});

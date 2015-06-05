describe("Pizza", function(){
  it("will return price of pizza with no toppings", function(){
    var newPizza = new Pizza(10);
    expect(newPizza.cost).to.equal(10);
  });

});

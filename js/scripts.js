function IceCream(isKid, cone){
  this.isKid = isKid;
  this.cone = cone;
  this.scoops = [];
  this.toppings = [new Topping("sprinkles", 30), new Topping("hot fudge", 100), new Topping("whipped cream", 50), new Topping("strawberry sauce", 100), new Topping("cherry", 30), new Topping("peanuts", 50), new Topping("banana", 80), new Topping("waffle cone", 80)];
  this.basePrice = 200;
  this.toppingsPrice = 0;
  this.scoopPrice = 0;

}

IceCream.prototype.getTotalPrice = function(){
  var totalPrice = (this.basePrice + this.toppingsPrice + this.scoopPrice);
  return totalPrice;
}

IceCream.prototype.addTopping = function(topping){
  for (var i = 0; i < this.toppings.length; i++) {
    if (this.toppings[i].name === topping){
      this.toppings[i].number ++;
      this.toppingsPrice += this.toppings[i].cost;
    }
  }
}

IceCream.prototype.removeTopping = function(topping){
  for (var i = 0; i < this.toppings.length; i++) {
    var currentTopping = this.toppings[i];
    if (currentTopping.name === topping && currentTopping.number > 0){
      this.toppings[i].number --;
      this.toppingsPrice -= this.toppings[i].cost;
    }
  }
}

IceCream.prototype.updateScoopPrice = function() {
  var scoopCost = 100;
  if (this.isKid){
    scoopCost = 50;
  }
  var howManyScoops = this.scoops.length;
  this.scoopPrice = (scoopCost * howManyScoops);
}

IceCream.prototype.addScoop = function(flavor){
  this.scoops.push(flavor);
  this.updateScoopPrice();
}

function Topping(name, cost){
  this.name = name;
  this.cost = cost;
  this.number = 0;
}

function newKidsCone(flavor, cone){
  var iceCream = new IceCream(true, cone);
  iceCream.addScoop(flavor);
  return iceCream;
}

function newSingleCone(flavor, cone){
  var iceCream = new IceCream(false, cone);
  iceCream.addScoop(flavor);
  return iceCream;
}

function newDoubleCone(flavor1, flavor2, cone){
  var iceCream = new IceCream(false, cone);
  iceCream.addScoop(flavor1);
  iceCream.addScoop(flavor2);
  return iceCream;
}

function newTripleCone(flavor1, flavor2, flavor3, cone){
  var iceCream = new IceCream(false, cone);
  iceCream.addScoop(flavor1);
  iceCream.addScoop(flavor2);
  iceCream.addScoop(flavor3);
  return iceCream;
}

function newClassicBananaSplit(){
  var iceCream = new IceCream(false, cone);
  iceCream.addScoop("vanilla");
  iceCream.addScoop("chocolate");
  iceCream.addScoop("strawberry");
  iceCream.addTopping("banana");
  iceCream.addTopping("strawberry sauce");
  iceCream.addTopping("hot fudge");  
  iceCream.addTopping("whipped cream");
  iceCream.addTopping("peanuts");
  iceCream.addTopping("cherry");
  return iceCream;
}
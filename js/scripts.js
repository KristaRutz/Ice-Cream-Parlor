function IceCream(isKid, cone){
  this.isKid = isKid;
  this.cone = cone;
  this.scoops = [];
  this.toppings = [Topping("sprinkles", 0.3), Topping("hot fudge", 1), Topping("whipped cream", 0.5), Topping("berry compote", 1), Topping("cherry", 0.3), Topping("peanuts", 0.5), Topping("banana", 0.8), Topping("waffle cone", 0.8)];
  this.basePrice = 2;
  this.toppingsPrice = 0;
  this.scoopCost = 0;
  this.totalPrice = basePrice + toppingsPrice + scoopPrice;
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

IceCream.prototype.updatePrice = function() {

  var scoopCost = 1;
  var howManyScoops = this.scoops.length;
  if (howManyScoops === 1) {
    if (this.isKid){
      var scoopCost = 0.5;
    } 
  }
  this.price += (scoopCost * howManyScoops);
  return this.price;
}

IceCream.prototype.addScoop = function(scoop){
  if 
  this.scoops.push(scoop);
}

function Topping(name, cost){
  this.name = name;
  this.cost = cost;
  this.number = 0;
}

function newKidsCone(flavor, cone){
  var iceCream = new IceCream(isKid, cone);
  var scoop = flavor;
  iceCream.scoops.push(scoop);
  return iceCream;
}

function newSingleCone(flavor, cone){
  var scoop = new Scoop(false, flavor, cone);
  var iceCream = new IceCream();
  return iceCream;
}
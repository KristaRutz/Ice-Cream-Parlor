function IceCream(cone){
  this.scoops = [];
  this.toppings = [];
  this.cone = cone;
}

IceCream.prototype.getPrice = function() {
  var basePrice = 2;
  var scoopCost = 1;
  var toppingCost = 0.3;
  var howManyScoops = this.scoops.length;
  if (howManyScoops === 1) {
    var isKid = this.scoops[0].size;
    if (isKid){
      var scoopCost = 0.25;
    } 
  }
  var howManyToppings = this.toppings.length;
  var total = (2 + )
}

IceCream.prototype.addScoop = function(scoop){
  this.scoops.push(scoop);
}

function Scoop(isKid, flavor){
  this.isKid = isKid;
  this.flavor = flavor;
}

function newKidsCone(flavor){
  var scoop = new Scoop(true, flavor);
  var iceCream = new IceCream();
  return iceCream;
}

function newSingleCone(flavor){
  var scoop = new Scoop(false, flavor);
  var iceCream = new IceCream();
  return iceCream;
}
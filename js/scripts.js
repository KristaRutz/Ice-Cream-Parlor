// Back-end ------------------------------------------------------
function IceCream(isKid){
  this.isKid = isKid;
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

function newKidsCone(flavor){
  var iceCream = new IceCream(true);
  iceCream.addScoop(flavor);
  return iceCream;
}

function newSingleCone(flavor){
  var iceCream = new IceCream(false);
  iceCream.addScoop(flavor);
  return iceCream;
}

function newDoubleCone(flavor1, flavor2){
  var iceCream = new IceCream(false);
  iceCream.addScoop(flavor1);
  iceCream.addScoop(flavor2);
  return iceCream;
}

function newTripleCone(flavor1, flavor2, flavor3){
  var iceCream = new IceCream(false);
  iceCream.addScoop(flavor1);
  iceCream.addScoop(flavor2);
  iceCream.addScoop(flavor3);
  return iceCream;
}

function newClassicBananaSplit(){
  var iceCream = new IceCream(false);
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

function getCartTotal(){
  // sidebar should be updated
}

// User Interface --------------------------------------------------
//var cart = [];

function updateCartTotal(currentDessert){
  var cartTotal = currentDessert.getTotalPrice() / 100;
  console.log(cartTotal)
  $("#cartTotalPrice").text(cartTotal.toFixed(2));
}

function displayForm(dessertType){
  $("#flavorSelect1").show();
  $("#flavorSelect2").hide();
  $("#flavorSelect3").hide();
  $("#toppingsSelect").show();

  if (dessertType === "Split"){
    $("#flavorSelect1").hide();
    $("#toppingsSelect").hide();
  } else if (dessertType === "3" || dessertType === "Sundae") {
    $("#flavorSelect2").show();
    $("#flavorSelect3").show();
  } else if (dessertType === "2") {
    $("#flavorSelect2").show();
  } else if (dessertType === "Milkshake") {
    $("#toppingsSelect").hide();
  }
}

$(document).ready(function() {
  var currentDessert;
  var typeChosen = false;

  $("#makeTypeChoice").click(function() {
    var scoopSelection = $("#dessertTypeSelect").val()
    typeChosen = true;
    displayForm(scoopSelection);
  })

  $("#new-dessert-form").submit(function(event) {
    event.preventDefault();

    if (typeChosen) {
      var dessertType = $("#dessertTypeSelect").val();

      var flavor1 = $("#flavorSelect1").val();
      var flavor1 = $("#flavorSelect1").val();
      var flavor1 = $("#flavorSelect1").val();

      if (dessertType === "1"){
        currentDessert = newSingleCone(flavor1);
      }

      var listOfToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        var topping = $(this).val();
        listOfToppings.push(topping);
        currentDessert.addTopping(topping);
      });

      updateCartTotal(currentDessert);
      console.log(listOfToppings);
      console.log($("#flavorSelect1").val());
    }
  })

  // $("#kids").click(function(){
  //   console.log("Kid scoop was selected");
  //   $("#dessertTypeDropDown").hide();
  //   var currentDessert = newKidsCone();
  // })

  // $("#1").click(function(){
  //   console.log("Single scoop was selected");
  // })

  // $("#2").click(function(){
  //   console.log("Double scoop was selected");
  // })

  // $("#bananaSplit").click(function(){
  //   currentDessert = newClassicBananaSplit();
  // })
})
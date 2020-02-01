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

function newMilkshake(flavor){
  var iceCream = new IceCream(false);
  iceCream.addScoop(flavor); 
  iceCream.addTopping("whipped cream");
  iceCream.addTopping("sprinkles");
  iceCream.addTopping("cherry");
  return iceCream;
}

function newSundae(flavor1, flavor2, flavor3){
  var iceCream = new IceCream(false);
  iceCream.addScoop(flavor1);
  iceCream.addScoop(flavor2);
  iceCream.addScoop(flavor3);
  iceCream.addTopping("whipped cream");
  iceCream.addTopping("hot fudge");
  iceCream.addTopping("cherry");
  return iceCream;
}

// User Interface --------------------------------------------------
//var cart = [];

function updateCartTotal(currentDessert){
  var cartTotal = currentDessert.getTotalPrice() / 100;
  console.log(cartTotal)
  $("#cartTotalPrice").text(cartTotal.toFixed(2));
}

function displayForm(dessertType){
  $("#flavorSelect1Div").show();
  $("#flavorSelect2Div").hide();
  $("#flavorSelect3Div").hide();
  $("#toppingsSelect").show();

  if (dessertType === "Split"){
    $("#flavorSelect1Div").hide();
    $("#toppingsSelect").hide();
  } else if (dessertType === "3" || dessertType === "Sundae") {
    $("#flavorSelect2Div").show();
    $("#flavorSelect3Div").show();
  } else if (dessertType === "2") {
    $("#flavorSelect2Div").show();
  } else if (dessertType === "Milkshake") {
    $("#toppingsSelectDiv").hide();
  } else if (dessertType === "reset") {
    $("#flavorSelect1Div").hide();
    $("#toppingsSelect").hide();
  }
}

$(document).ready(function() {
  var currentDessert;
  var typeChosen = false;

  $("#makeTypeChoice").click(function() {
    if (typeChosen === false) {
      var scoopSelection = $("#dessertTypeSelect").val()
      $("#dessertTypeSelect").hide();
      $("#makeTypeChoice").text("Change your treat!")
      typeChosen = true;
      displayForm(scoopSelection);
    } else {
      $("#dessertTypeSelect").show();
      $("#makeTypeChoice").text("Choose!")
      typeChosen = false;
      displayForm("reset");
    }
  })

  $("#new-dessert-form").submit(function(event) {
    event.preventDefault();

    if (typeChosen) {
      var dessertType = $("#dessertTypeSelect").val();
      var flavor1 = $("#flavorSelect1").val();
      var flavor2 = $("#flavorSelect2").val();
      var flavor3 = $("#flavorSelect3").val();

      if (dessertType === "1"){
        currentDessert = newSingleCone(flavor1);
      } else if (dessertType === "2"){
        currentDessert = newDoubleCone(flavor1, flavor2);
      } else if (dessertType === "3"){
        currentDessert = newTripleCone(flavor1, flavor2, flavor3);
      } else if (dessertType === "Kids"){
        currentDessert = newKidsCone(flavor1);
      } else if (dessertType === "Milkshake"){
        currentDessert = newMilkshake(flavor1);
      } else if (dessertType === "Split"){
        currentDessert = newClassicBananaSplit();
      } else if (dessertType === "Sundae"){
        currentDessert = newSundae(flavor1, flavor2, flavor3);
      }

      var listOfToppings = [];
      $("input:checkbox[name=toppings]:checked").each(function(){
        var topping = $(this).val();
        listOfToppings.push(topping);
        currentDessert.addTopping(topping);
      });

      updateCartTotal(currentDessert);
      console.log(currentDessert);

      typeChosen = false;
      $("#new-dessert-form").trigger("reset"); 

      $("#dessertTypeSelect").show();
      $("#makeTypeChoice").text("Choose!")
      $("#flavorSelect1Div").hide();
      $("#toppingsSelect").hide();   
      $("#flavorSelect2Div").hide();
      $("#flavorSelect3Div").hide();
    }
  })
})
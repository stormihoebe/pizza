//Pizza Constructor
function Pizza(type, size, toppings, delivery, price){
this.type = type;
this.size = size;
this.toppings = toppings;
this.delivery = delivery;
this.price = price;
};
var typeInput;
var sizeInput;
var toppings = [];
var deliveryInput;
var price = 0;

//Prototype for Pizza Receipt
Pizza.prototype.Receipt = function() {
//Type
  if (typeInput === "Build Your Own"){
		price += 7;
	}else {
		price += 10;
  };
//Size
  if (sizeInput === "Personal"){
    price += 0;
  } else if (sizeInput === "Small"){
    price += 3;
  } else if (sizeInput === "Medium"){
    price += 6;
  } else if (sizeInput === "Large"){
    price += 9;
  } else if (sizeInput === "Extra Large"){
    price += 12;
  };
// Delivery
  if (deliveryInput === "Delivery") {
    price += 5;
  } else {
    price += 0;
  };
//Toppings
  toppings.forEach(function(topping){
    price += 1;
  });

  return price;
};
var resetPrice = function(){
  price = 0;
  toppings = [];

};

var cart = [];
var total = 0
var pizzaPrice = 0;


//-------------------------------------Front end-----------------------------------------
$(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    resetPrice();
    $("#initialReceipt").hide();
    $("#result").show();
    $("#toppingsOutput").text("");
    $("#pizzaInCart").text("");
    typeInput = $("#pizzaType").val();
    sizeInput = $("#pizzaSize").val();
    deliveryInput = $("#pizzaDelivery").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping);
    });
    pizzaOrder = new Pizza(typeInput, sizeInput, toppings, deliveryInput, price);
    cart.push(pizzaOrder);
    cart.forEach(function(pizza){
      $("#pizzaInCart").append("<p>"+ pizza.type +"</p>");
    });
    pizzaPrice = pizzaOrder.Receipt();
    total += pizzaPrice;


    $(".totalOutput").text(total);

    $(".numberInCart").text("("+ cart.length+")");
    $("#typeOutput").text(typeInput);
    $("#sizeOutput").text(sizeInput);
    $("#deliveryOutput").text(deliveryInput);
    toppings.forEach(function(topping){
      $("#toppingsOutput").append("<p>"+ topping + "</p>");
    });
    $("#priceOutput").text("$ "+ pizzaPrice);
  });
  $(".viewCart").click(function(){
    $(".cartRow").show();

  });
  $('#startOver').click(function() {
    location.reload();
  });
  $('#submitOrder').click(function() {
    if (deliveryInput === "Delivery"){
      $("#addressForm").show();
    }else {
    alert("Your order has been submitted. It will be ready in 30 for pick up in 30 minutes. Page will refresh.");
    location.reload();
  };
  });
  $("#addressForm").submit(function(event) {
    event.preventDefault();
    alert("Your order has been submitted. Expect delivery within 45 minutes. Page will refresh.");
    location.reload();
  });
});

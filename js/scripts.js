//Pizza Constructor
function Pizza(type, size, toppings, delivery){
this.type = type;
this.size = size;
this.toppings = toppings;
this.delivery = delivery;
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
}
//-------------------------------------Front end-----------------------------------------
$(function(){
  $("#pizzaForm").submit(function(event){
    event.preventDefault();
    resetPrice();
    typeInput = $("#pizzaType").val();
    sizeInput = $("#pizzaSize").val();
    deliveryInput = $("#pizzaDelivery").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
      toppings.push(topping);
    });

    var pizzaOrder = new Pizza(typeInput, sizeInput, toppings, deliveryInput);
      console.log(pizzaOrder.Receipt());
  });





});

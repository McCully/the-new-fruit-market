
function Customer(cash){
  this.cash = cash;
  this.apple = 0;
  this.oranges = 0;
  this.bananas = 0;
  this.pears = 0;
}


$(document).ready(function(){
  var fruit = ["apples" , "oranges" , "bananas" , "pears"];
  var totalCash = 20;

  var c = new Customer(totalCash);

  // Store customer data.
  $('.container').data("info", c)

  $('.container').on('click', ".btn", function() {

  	console.log("click:")

  	var customerInfo = $('.container').data("info")

  	switch(this.id) {
  		case 'a':
  		    customerInfo.apple += 1;
  		    $('#appleCount').text(customerInfo.apple)
  		    break;
  		case 'o':
  		    customerInfo.oranges += 1;
  		    $('#orangeCount').text(customerInfo.apple)
  		    break;
  		case 'b':
  		    customerInfo.bananas += 1;
  		    $('#bananaCount').text(customerInfo.apple)
  		    break;
  		case 'p':
  		    customerInfo.pears += 1;
  		    $('#pearCount').text(customerInfo.apple)
  		    break;
  	}

  	$('.container').data("info", c)

  });
  setInterval(function() {    // 15 second delay
  priceShift();
  console.log(productPrices.apple);
}, 1000);
});

var productPrices = {
  apple: 0,
  orange: 0,
  banana: 0,
  pears: 0
};
var cashOnHand = 100000;

function Customer(cash){
  this.cash = cash;
  this.apple = 0;
  this.oranges = 0;
  this.bananas = 0;
  this.pears = 0;
}

function buyProduct() {
  var productPrice; //Price of product clicked on ($(this).id......);
  if (poductPrice > cashOnHand){
    alert("You don't have enough money! (GET A JOB!)")
  }
  else{
    // Item clicked on +1
    //cashOnHand -= productPrice;
  }
}

function initialPrice() {
    productPrices.apple = initialGen();
     productPrices.orange = initialGen();
     productPrices.banana = initialGen();
     productPrices.pear = initialGen();
       function initialGen() {
       var min = 50
       var max = 999
       startingPrice = randomNumber(min, max);
       return startingPrice
   };
 };

function priceShift() {

function priceShuft(currentPrice){ // changes the price of a single item
  var min = currentPrice - 50; // minimum price
  var max = currentPrice + 50; // maximum price

  var newPrice = randomNumber(min, max);

    if (newPrice < 50) {
      newPrice = 50;
    }
    if (newPrice > 999) {
      newPrice = 999;
    }

    return newPrice;
  }
   productPrices.apple = priceShuft(productPrices.apple);
   productPrices.orange = priceShuft(productPrices.orange);
   productPrices.banana = priceShuft(productPrices.banana);
   productPrices.pear = priceShuft(productPrices.pear);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);

}




 // CONSOLE LOG ===============================
 initialPrice();
 console.log(productPrices.apple);

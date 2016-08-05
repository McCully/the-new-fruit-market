$(document).ready(function(){
  var fruit = ["apples" , "oranges" , "bananas" , "pears"];

  var c = new Customer();

  // initial price shown on DOM
  // $('#applePrice').empty();
  $('#applePrice').append("$" + (productPrices.apple/100).toFixed(2));

  // $('#orangePrice').empty();
  $('#orangePrice').append("$" + (productPrices.orange/100).toFixed(2));

  // $('#bananaPrice').empty();
  $('#bananaPrice').append("$" + (productPrices.banana/100).toFixed(2));

  // $('#pearPrice').empty();
  $('#pearPrice').append("$" + (productPrices.pears/100).toFixed(2));

  // Store customer data.
  $('.container').data("info", c)

  $('.container').on('click', ".btn", function() {

  	console.log("click:")

  	var customerInfo = $('.container').data("info")

  	switch(this.id) {
  		case 'a':
          var price = productPrices.apple;
          buyProduct(price)
  		    customerInfo.apple += 1;
  		    $('#appleCount').text(customerInfo.apple)
  		    break;
  		case 'o':
          var price = productPrices.orange;
          buyProduct(price)
  		    customerInfo.oranges += 1;
  		    $('#orangeCount').text(customerInfo.oranges)
  		    break;
  		case 'b':
          var price = productPrices.banana;
          buyProduct(price)
  		    customerInfo.bananas += 1;
  		    $('#bananaCount').text(customerInfo.bananas)
  		    break;
  		case 'p':
          var price = productPrices.pears;
          console.log("Price: ", price)
          buyProduct(price)
  		    customerInfo.pears += 1;
  		    $('#pearCount').text(customerInfo.pears)
  		    break;
  	}

  	$('.container').data("info", c)

  });
  setInterval(function() {    // 15 second delay
  priceShift();
  console.log(productPrices.apple);

  $('#applePrice').empty();
  $('#applePrice').append("$" + (productPrices.apple/100).toFixed(2));

  $('#orangePrice').empty();
  $('#orangePrice').append("$" + (productPrices.orange/100).toFixed(2));

  $('#bananaPrice').empty();
  $('#bananaPrice').append("$" + (productPrices.banana/100).toFixed(2));

  $('#pearPrice').empty();
  $('#pearPrice').append("$" + (productPrices.pears/100).toFixed(2));
}, 15000);
});

var productPrices = {
  apple: 0,
  orange: 0,
  banana: 0,
  pears: 0
};

function Customer(){
  this.apple = 0;
  this.oranges = 0;
  this.bananas = 0;
  this.pears = 0;
}

function buyProduct(price) {
  var cash = $('#cashOutput').text()
  cash = cash * 100;
  cash.toFixed(2);

  if (price > cash){
    alert("You don't have enough money! (GET A JOB!)")
  }
  else{
    var output = (cash -= price) / 100;
    $('#cashOutput').text(output.toFixed(2));
  }
}

function initialPrice() {
    productPrices.apple = initialGen();
     productPrices.orange = initialGen();
     productPrices.banana = initialGen();
     productPrices.pears = initialGen();
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
   productPrices.pears = priceShuft(productPrices.pears);
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);

}




 // CONSOLE LOG ===============================
 initialPrice();
 console.log(productPrices.apple);

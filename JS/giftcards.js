function increaseTotalPrice(totalPrice, recipePrice) {
    var value = parseInt(document.getElementById(totalPrice).value, 10);
    let Price = recipePrice;
    Price = isNaN(Price) ? 0 : Price;    
    document.getElementById(totalPrice).value = value + Price
} 

function decreaseTotalPrice(totalPrice, recipePrice) {
    var value = parseInt(document.getElementById(totalPrice).value, 10);
    let Price = recipePrice;
    Price = isNaN(Price) ? 0 : Price;
    var newTotal = value - Price;
    if (newTotal <= 0)
        document.getElementById(totalPrice).value = 0;
    else    
        document.getElementById(totalPrice).value = newTotal;
} 

function orderGiftCard(){
    alert("Thank You");
}
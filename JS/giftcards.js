function increaseValue() {
    var value = parseInt(document.getElementById(quantity1).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(quantity1).value = value;
    updateTotalPrice(totalPrice, price, sign);
    updateCartItems(brand, value, OneOrHalf);
}


function increaseValue() {
    let totalPrice = document.getElementById("totalPriceText");
    let recpiePrice = d

    var value = parseInt(document.getElementById(quantity1).value, 10);
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById(quantity1).value = value;
    updateTotalPrice(totalPrice, price, sign);
    updateCartItems(brand, value, OneOrHalf);
}



function updateTotalPrice(totalPrice, price, sign) {
    var value = parseInt(document.getElementById(totalPrice).value, 10);
    if (sign == '-')
        value = value - price;
    else {
        value = value + price;
    }
    if (value <= 0)
        document.getElementById(totalPrice).value = 0;
    else
        document.getElementById(totalPrice).value = value;
} 
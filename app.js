
function updateProductQuantityAndPrice(product,price,isAdd) {
    const inputElement = document.getElementById(`${product}-quantity`);
    let productQuantity;
    const inputElementValue = inputElement.value;
    if (isAdd) {
        productQuantity = parseInt(inputElementValue) + 1;
    } else if(inputElementValue > 0) {
        productQuantity = parseInt(inputElementValue) - 1;
    } else {
        productQuantity = 0;
    }
    inputElement.value = productQuantity;

    const textElement = document.getElementById(`${product}-price`);
    const productPrice = productQuantity * price;
    textElement.innerText = productPrice;
    calculateProductTotalPrice();
}



function getProductPrice(product) {
    const productPriceElement = document.getElementById(`${product}-price`);
    const productPrice = parseInt(productPriceElement.innerText);
    return productPrice;
}

function getTotalPrice(product,price) {
    const totalPriceElement = document.getElementById(`${product}-amount`);
    totalPriceElement.innerText = price;

}

function calculateProductTotalPrice() {
    const totalPrice = getProductPrice('phone') + getProductPrice('case');

    getTotalPrice('subTotal',totalPrice);

    const tex = 10;


    const totalTex = totalPrice / tex;

    getTotalPrice('tex',totalTex);

    const finalTotalPrice = totalPrice + totalTex;
    getTotalPrice('total',finalTotalPrice);
}




document.getElementById('case-increase').addEventListener('click',function(){
    updateProductQuantityAndPrice('case',59,true);
})


document.getElementById('case-decrease').addEventListener('click',function(){
    updateProductQuantityAndPrice('case',59,false);
})

document.getElementById('phone-increase').addEventListener('click',function(){
    updateProductQuantityAndPrice('phone',1200,true);
})

document.getElementById('phone-decrease').addEventListener('click',function(){
    updateProductQuantityAndPrice('phone',1200,false);
})


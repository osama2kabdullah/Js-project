function updateCounter(condition, product, price){
    const countInput = document.getElementById(product + '-count');
    // const PhonCountValue = phoneCount.value;
    if(condition == true){
        countInput.value = parseInt(countInput.value) + 1;
    }else if(countInput.value >= 2){
        countInput.value = parseInt(countInput.value) - 1;
    }
    const Total = document.getElementById(product + '-total');
    Total.innerText = parseInt(countInput.value) * price;
    // subtotal 
    updatePrice();
}

// subtotal 
function updatePrice(){
    const phoneCountValue = parseInt(document.getElementById('phone-count').value) * 1219;
    const caseCountValue = parseInt(document.getElementById('case-count').value) * 59;
    
    const subTotal = document.getElementById('sub-total');
    subTotal.innerText = phoneCountValue + caseCountValue;
    
    // vat 
    const vatBord = document.getElementById('vat-total');
    const vat = (parseInt(subTotal.innerText) * 2) / 100;
    vatBord.innerText = parseInt(vat);
    
    // finul total 
    const _total = document.getElementById('total-price');
    _total.innerText = parseInt(subTotal.innerText) + parseInt(vatBord.innerText);
}

// btn handlr plus and minus
document.getElementById('phone-plus-Btn').addEventListener('click', function(){
    updateCounter(true, 'phone', 1219);
})
document.getElementById('phone-minus-Btn').addEventListener('click', function(){
    updateCounter(false, 'phone', 1219);
})
document.getElementById('case-plus-Btn').addEventListener('click', function(){
    updateCounter(true, 'case', 59);
})
document.getElementById('case-minus-Btn').addEventListener('click', function(){
    updateCounter(false, 'case', 59);
})

// remove item by click 
document.getElementById('cross-2').addEventListener('click', function(){
    document.getElementById('cart-2').style.display = 'none';
})
document.getElementById('cross-1').addEventListener('click', function(){
    document.getElementById('cart-1').style.display = 'none';
})
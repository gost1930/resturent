// cart.html
let showCount = document.getElementById('count')
let cartNumber = document.getElementById('cartNumber')

for( let i = 1; i <= cartNumber.childElementCount ; i++ ){

    showCount.innerHTML = i
}

// Price Count in cart.html
function calculateTotalPrice() {
    const prices = document.querySelectorAll('[data-price]');
    let total = 0;
    prices.forEach(priceElement => {
        total += parseInt(priceElement.getAttribute('data-price'));
    });
    document.getElementById('totalPrice').innerText = total;
}
document.addEventListener('DOMContentLoaded', calculateTotalPrice);













































// // cart show
// let cart = document.getElementById('cart')


// // show cart

// function showBtn(){
//     cart.classList.remove('-left-[315px]')
//     cart.classList.add('left-0')
//     console.log('show')
// }

// // close cart
// function closed(){
//     cart.classList.add('-left-[315px]')
//     console.log('close')
// }
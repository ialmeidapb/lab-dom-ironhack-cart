// ITERATION 1
const product = document.getElementsByClassName("product")

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let price = product.querySelector('.price span').innerText;
  let quantity = product.querySelector('.quantity input').value;

  let subTotal = Number(price) * Number(quantity);

  product.querySelector('.subtotal span').innerText=subTotal;

  return subTotal;

}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  let totalPrice = 0;
  let products = document.querySelectorAll('.product');
  products.forEach((product) => {
    totalPrice += updateSubtotal(product);
  });

  // ITERATION 3
  document.querySelector('#total-value span').innerText = Number(totalPrice);
}

// ITERATION 4



// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});

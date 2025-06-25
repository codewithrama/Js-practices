"use strict";

const product_prices = [19.99, 24.99, 14.99];
let increment = 0;

// first need to increment the button when + is clicked
// need to store quanity with product price total

/// when checkout button is clicked we need to show the product(quanity ) * price

// total need to be calculated

const productdetails = {
  product1: {
    name: "Product1",
    price: 19.99,
    productid: 0,
  },
  product2: {
    name: "Product2",
    price: 24.99,
    productid: 1,
  },
  product3: {
    name: "Product3",
    price: 14.99,
    productid: 2,
  },
};

const incrementButton = document.querySelectorAll(".btn-plus");

console.log(incrementButton);

for (let i = 0; i < incrementButton.length; i++) {
  let increment = 0; // ← each button has its own counter

  incrementButton[i].addEventListener("click", function () {
    const productid = Number(incrementButton[i].dataset.product);
    if (productid === i) {
      increment += 1;
      console.log(productid);
      document.querySelector(`.counter--${i}`).textContent = increment;
    }
  });
}

//checkout action
// 1. selected product,selected quanity, selected product price
checkout.addEventListener("click", function () {
  document.querySelector(`.product-listing`).textContent = productid;
});

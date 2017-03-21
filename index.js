const app = "I don't do much."

const products = [
  { name: 'Head & Shoulders Shampoo', price: 4.99, discount: .6 },
  { name: 'Twinkies', price: 7.99, discount: .45 },
  { name: 'Oreos', price: 6.49, discount: .8 },
  { name: 'Jasmine-scented bath pearls', price: 13.99, discount: .7 },
];


//in this final implementation, collection is the array we want to pass in, 
//callback is the function we want to run in it, 
//and initialValue is whatever we set as the starting value
function reduce(collection, callback, initialValue) {
  let result = initialValue;
 
  collection.forEach((product, index) => {
    result = callback(result, product, index, collection);
  });
 
  return result;
}




//function that adds together all applicable products where discount is over 50%
//need to pass the products array of objects, and then iterate through the discounts to see who makes the cut
//inside the function, we need to set up a totalprice var and initialize it with 0 to start
//then add each applicable product to our totalPrice when we iterate through them with a forEach
// function getTotalAmountForProducts(products) {
//   let totalPrice = 0;
 
//   products.forEach(product => {
//     if (product.discount >= .5) {
//       totalPrice += product.price;
//     }
//   });
 
//   return totalPrice;
// }
 
console.log(getTotalAmountForProducts(products)); // prints 25.5

//That works, but what if we want to change our logic to make sure a product costs less than 7 instead of has a 50% discount?
//we can pass a callback function into our function to handle this:

// function getTotalAmountForProducts(products, callback) {
//   let totalPrice = 0;
 
//   products.forEach(product => {
//     totalPrice = callback(totalPrice, product);
//   });
 
//   return totalPrice;
// }
 
// //for adding if 50% discount: 
// function callback(totalPrice, product) {
//   if (product.discount >= .5) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
 
// console.log(getTotalAmountForProducts(products, callback)); // prints 25.5

// //for under 7 dollar price point
// function callback(totalPrice, product) {
//   if (product.price < 7) {
//     return totalPrice + product.price;
//   }
//   return totalPrice;
// }
 
// console.log(getTotalAmountForProducts(products, callback)); // prints 11.5
// We need to write some code to return the original price of a product, the return type must be of type decimal and the number must be rounded to two decimal places.

// We will be given the sale price (discounted price), and the sale percentage, our job is to figure out the original price.

// For example:
// Given an item at $75 sale price after applying a 25% discount, the function should return the original price of that item before applying the sale percentage, which is ($100.00) of course, rounded to two decimal places.

// DiscoverOriginalPrice(75, 25) => 100.00M where 75 is the sale price (discounted price), 25 is the sale percentage and 100 is the original price


//mine:
function discoverOriginalPrice(discountedPrice, salePercentage){
    let result = Number(discountedPrice / (1 - (salePercentage * .01)))
    return result.toFixed(2) % 1 === 0 ? Math.round(result) : +result.toFixed(2)
}

//top solution:
function discoverOriginalPrice(discountedPrice, salePercentage){
    return +(discountedPrice / (1 - salePercentage / 100)).toFixed(2);
  }


//test:
console.log(discoverOriginalPrice(75, 25))
console.log(discoverOriginalPrice(373.85,11.2))
console.log(discoverOriginalPrice(458.2, 17.13))
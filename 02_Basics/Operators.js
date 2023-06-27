let sellingPrice = 199,
  listingPrice = 799;
let discountPercent = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(`Discount Percentage is :  ${discountPercent}`);
console.log(
  "Discount Percentage in round figure is " + Math.round(discountPercent)
);

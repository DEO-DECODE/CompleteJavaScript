var testArray=[2,4,6,3,1,5,9,8];
// console.log(testArray.fill('hi'));
// console.log(testArray.fill('hi',2));
console.log(testArray.fill('h', 2, 5));
// 2nd index is inclusive and 5th is exclusive.
const myNumber =[23, 24, 25, 55, 66, 77, 87, 98];

const result= myNumber.filter((num)=>{
    return num>55;
})
console.log(result);
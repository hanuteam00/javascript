const array1 = [1, 2, 3, 4];

const reducer = (accumulator, currentValue) => accumulator + currentValue;
console.log(array1.reduce(reducer))

console.log(array1.reduce(reducer, 5))  //truyen vao gia tri initialValue

/*
// 0 + 1 + 2 + 3 + 4
const initialValue = 0;
const sumWithInitial = array1.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue,
);

console.log(sumWithInitial);
// Expected output: 10
*/

//28. Sort
const months = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months);
// Expected output: Array ["Dec", "Feb", "Jan", "March"]

const array2 = [1, 30, 4, 21, 100000];
array2.sort();
console.log(array2);
//1,30,4,21,10000
//1,4,30,21,10000
//1,4,21,30,10000
//... -> take time with sort each pair
// Expected output: Array [1, 100000, 21, 30, 4]

const array3 = [1, 30, 4, 21, 100000];
//sap xep thu tu be den lon
array3.sort((item1,item2) => {
    // if (item1>item2) array3.push(item1)
    console.log(item1, item2)
    return item1-item2
});
console.log(array3);
// Expected output: Array [1, 100000, 21, 30, 4]

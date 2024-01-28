//JavaScript String Methods
//https://www.w3schools.com/js/js_string_methods.asp

/*
Extracting String Parts
There are 3 methods for extracting a part of a string:

slice(start, end)
substring(start, end)
substr(start, length)
*/

//Slice out a portion of a string from position 7 to position 13:
//JavaScript counts positions from zero.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
console.log(part)
//If you omit the second parameter, the method will slice out the rest of the string:
let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(7);
console.log(part1)

//Replacing String Content
let text2 = "Please visit Microsoft!";
let newText2 = text2.replace("Microsoft", "W3Schools");
console.log(newText2)

//https://www.w3schools.com/js/js_numbers.asp
let a = 5;
let d = "5";
console.log(a + d)  //JS immediately merge number and string
console.log(a - d)  //JS tries to convert to number then perform calculation
console.log(a / d)  //JS tries to convert to number then perform calculation
console.log(a * d)  //JS tries to convert to number then perform calculation
console.log(a === d) //Toán tử so sánh nghiêm ngặt sẽ trả về false nếu các giá trị khác nhau
console.log(a == d)  //Toán tử so sánh trừu tượng sẽ cố gắng giải quyết các kiểu dữ liệu thông qua việc chuyển đổi kiểu dữ liệu trước khi só sánh
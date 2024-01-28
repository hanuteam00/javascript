//https://www.w3schools.com/js/js_datatypes.asp
//Dynamic variables, same variable can be used to hold different data types
let xy;          //Now x is undefined
xy = 5;          // Now x is a number
xy = "John";     // Now x is a String

let answer1 = "He is called Johnny";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"'
let answer4 = "He is called \"Johnny\"" //xử lí cho phép nháy đôi là thêm \
let answer5 = `He is called "Johnny"`   //backtick xử lí string issue

//let answer4 = "He is called "Johnny"" error bởi vì không cho phép nháy đôi trong đôi, đơn trong đơn
//let answer5 = 'He is called 'Johnny'' error bởi vì không cho phép nháy đôi trong đôi, đơn trong đơn

let c = 5;
let d = 5.9;

console.log(answer1)
console.log(answer2)
console.log(answer3)

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = {firstName:"John", lastName:"Doe"};

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

let x1 = 5, y1 = 6, z1 = 7;
console.log("Test string 111:", x1, y1, z1)
console.log("Test string 222:", 'x1 =', x1, 'y1 =', y1, 'z1 =', z1)
console.log("Test string 333:" + ' x1 = ' + x1 + ' y1 = ' + y1 + ' z1 = ' + z1)

//String issue
let a = 'I am a String';
console.log(a)
console.log(4 + 5 + 'a') //= 9 + 'a' = cộng sau đó mới nối chuỗi
console.log('a' + 4 + 5) //= a4 + 5    nối chuỗi sau đó mới cộng

let answer6 = `He is called "Johnny"`   //backtick xử lí string issue
let answer7 = "He is + \
called Johnny"
let answer8 = "He is + \n\
called Johnny"
let answer9 = `He is
called "Johnny"`   //backtick hỗ trợ xử lí xuống dòng luôn thay vì cần +\n\

console.log(answer7)
console.log(answer8)
console.log(answer9)
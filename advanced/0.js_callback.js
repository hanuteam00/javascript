//https://www.w3schools.com/js/js_callback.asp
//1. Function Sequence
function myFirst() {
    myDisplayer("Hello");
}

function mySecond() {
    myDisplayer("Goodbye");
}
mySecond();
myFirst();

//2.Sequence Control - ex1
//3rd step
function myDisplayer(some) {
    console.log('myDisplayer1:', some);
}

//1st step: sum and store value
function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
//2nd step: call myCalculator and store the result is assigned to the variable result
let result = myCalculator(5, 5);
myDisplayer(result);

//3.Sequence Control - ex2
function myDisplayer2(some) {
    console.log('myDisplayer2:', some);
}
function myCalculator2(num1, num2) {
    let sum = num1 + num2;
    myDisplayer2(sum);
}
myCalculator2(5, 5);

//4.JavaScript Callbacks
function myDisplayer3(something) {
    console.log('myDisplayer3:', something);
}
function myCalculator3(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculator3(5, 5, myDisplayer3);  //myDisplayer3 is a callback

//5. Waiting for a Timeout
//myFunction is used as a callback and is passed to setTimeout() as an argument.
//3000 is the number of milliseconds before time-out, so myFunction() will be called after 3 seconds.
setTimeout(myFunction, 3000);   //setTimeout(myFunction(), 3000); not work, remove ()
function myFunction() {
    console.log('I love You!');
}

//6.Waiting for Intervals:
setInterval(myFunction, 1000);

function myFunction() {
  let d = new Date();
  console.log(
  d.getHours() + ":" +
  d.getMinutes() + ":" +
  d.getSeconds())
}
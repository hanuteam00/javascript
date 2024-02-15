//21. Declare function
function sum(a,b){
    return a+b; //must have
}
console.log('check sum a+b=', sum(6,9))

function fn1(x,y){
    return x+y;
}
console.log('check sum fn1:', fn1(3,4))


//22. Arrow function ES6, cung thoi Let
sumArr = (a,b) => {
    return a+b
}
console.log('check sumArr(3,4): ', sumArr(3,4))

let sumArr1 = (a,b) => {
    return a+b
}
console.log('check sumArr1(5,6): ', sumArr1(5,6))

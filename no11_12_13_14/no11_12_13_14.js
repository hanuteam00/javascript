let a = 10;
let b = 5;
console.log(`Total is ${a+b} and
Minus is ${a-b}`)

//12.object - quan ly values thong qua keys
let obj = {   //keys(or properties):  values
    name: 'Manh',
    address: 'Ha Noi',
    'nationality': 'Vietnamese',   //key có thể có '' hoặc không
    aFunction:function(){
        console.log('Hello World')
        return `${this.name} and ${this.address}`
    }
};

console.log("obj: ", obj)
console.log("obj: "+ obj)
console.log(`obj: ${obj}`)

//gan dong gia tri
let dynamic = 'name'
obj[dynamic] = 'Harry'
obj.b = 'Alli'
let array =[]
console.log("obj.name: " +obj.name)
console.log("obj.nationality: "+ obj.nationality)
console.log(`My name is ${obj.name} 
and my nationality is ${obj.nationality} 
and my function is ${obj.aFunction} 
and my execution functon is: ${obj.aFunction()}`)

//JSON Object
"{name:'Huyen', address:'Vinh Phuc'}"

//13.Array - quan ly values thong qua index - ban chat van la object
let arr = ['MU', 'Chelsea', 'Man City', 'Liver']
let arr1 = [
    {name: 'manh', age: 30},
    {name: 'trang', age: 25}
]
console.log('type of obj: ', typeof(obj), obj)
console.log('type of arr: ', typeof(arr), arr)

console.log('arr[0]: ', arr[0])
console.log('arr[1]: ', arr[1])

console.log('arr1[0]: ', arr1[0])
console.log('arr1[1]: ', arr1[1])
console.log('arr1: ', arr1)

// === and ==, empty, null, undefined
let a1 = 5, b1 = '5'
console.log('a1 = 5, b1 = \'5\', compare a1 == b1: ', 'result: ', a1 == b1)
console.log('a1 = 5, b1 = \'5\', compare a1 === b1: ', 'result: ', a1 === b1)

let c;  //luu gia tri bo nho = empty
console.log('undefined value c: ', c)

let n = null;  //chua luu gia tri bo nho
console.log('null value n: ', n)

// console.log('undefined declaration d: ', d)

let e = {}
console.log('empty e: ', e)



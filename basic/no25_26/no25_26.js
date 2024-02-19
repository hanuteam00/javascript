//25.Filter/Find trong Array
//Array filter - return elements match, if no match then return empty array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let filter = arr.filter((item, index) => {//item: tung phan tu
    console.log('check filter item:', item, 'index:', index)
    return item && item > 5;   //co gang tra ra phan tu cua mang
    // return item>5;              //co the khong hieu gi, chi tra ra true/false
})
console.log('filter:', filter)

//ex2:
let arr2 = [
    { name: 'Michael', age: 23 },
    { name: 'Learn', age: 24 },
    { name: 'ToRock', age: 25 },
    { name: 'Back', age: 27 },
    { name: 'Street', age: 26 },
    { name: 'Boy', age: 25 },
]
let filter2 = arr2.filter((item, index) => {//item: tung phan tu
    console.log('check filter item:', item, 'index:', index)
    return item && item.age === 25;   //co gang tra ra phan tu cua mang
    // return item>5;              //co the khong hieu gi, chi tra ra true/false
})
console.log('filter2 the elements matched:', filter2)

//Array find - returns the first element, if no match then return undefined
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
//ex3:
let arr3 = [
    { name: 'Michael', age: 23 },
    { name: 'Learn', age: 24 },
    { name: 'ToRock', age: 25 },
    { name: 'Back', age: 27 },
    { name: 'Street', age: 26 },
    { name: 'Boy', age: 25 },
]
let find3 = arr3.find((item, index) => {//item: tung phan tu
    console.log('check find item:', item, 'index:', index)
    return item && item.age === 25;   //co gang tra ra phan tu cua mang
    // return item>5;              //co the khong hieu gi, chi tra ra true/false
})
console.log('find3 the first element matched:', find3)

//26.Map - copy mang ban dau de su dung va tao ra mang moi
//Map thao tac voi du lieu thoai mai k can anh huong du lieu ban dau
let arr5 = [1,2,3,4,5]
for (let i = 0; i < arr5.length; i++){
    console.log('check value i in arr5: ', arr5[i])
}

let arr6 = [1,2,3,4,5]
for (let i = 0; i < arr6.length; i++){
    arr6[i] = arr6[i] * arr6[i]
}
console.log('check value arr6 multiply: ', arr6)

let arrMap = arr5.map((item, index) =>{
    item = item*item;
    return item;
})

console.log('check value arrMap: ', arrMap)
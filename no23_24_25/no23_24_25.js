//23.Function vs Method - deu de tai su dung code, khac nhau ve ten goi
func = (a, b) => {
    return a + b;
}

let obj = {
    name: 'manh',
    add: 'hanoi',
    getName: function () {   //method khong dung 1 minh, ben trong class hoac object
        return this.name;
    }
}
console.log('>>> getName of obj: ', obj.getName())

//24. Callback
//JS khong cho dong lenh theo thu tu (Async), nen can phai dung callback de cho chay theo thu tu

//way1
let sum1 = (a, b) => {
    return a + b
}
console.log('>>> check sum1: 6+9:', sum1(6, 9))

//way2
let sum = (a, b, callback) => {
    let tong = a + b;
    // callback(tong)
    setTimeout(() => {
        callback(tong)
    }, 1000)
}
let printSum = (message) => {
    console.log('>>> check sum2: 6+9:', message, 'after setTimeout')
}

sum(6, 9, printSum)

console.log('>>> end of setTimeout')

//setInterval
let sum4 = (a, b, callback) => {
    let tong = a + b;
    let i = 0
    let timer = setInterval(() => {
        callback(tong);
        console.log('>>>i: ', i)
        i++;
        if (i === 5) {
            clearInterval(timer)
        }
    }, 1000)
    
    
}
let printSum4 = (message4) => {
    console.log('>>> check sum4: 6+9:', message4, 'after setInterval')
}

sum4(6, 9, printSum4)

console.log('>>> end of setInterval')

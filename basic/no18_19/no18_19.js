
let day = '';
let currentday = new Date().getDay();
console.log('currentday: ', currentday)
switch (currentday) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wed';
        break;
    case 4:
        day = 'Thur';
        break;
    case 5:
        day = 'Fri';
        break;
    case 6:
        day = 'Saturday';
        break;
}

console.log('check day 1: ', day)

//
let a = 0;
switch (a) {
    case 0:
    case 1: //cung 1 level se nhan chung dieu kien va gia tri
        day = 'Sunday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wed';
        break;
    case 4:
        day = 'Thur';
        break;
    case 5:
        day = 'Fri';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log('check day 2: ', day)

//19. Variables
//var - code chay duoc nhung khong show error, debug kho
console.log('value x: ', x)
var x = 5;
console.log('value x: ', x)

//var - code khong chay duoc va show error, debug kho
// console.log('value y: ', y)

for (let i = 0; i <=3; i++){
    console.log('>>> check value i: ', i)
}
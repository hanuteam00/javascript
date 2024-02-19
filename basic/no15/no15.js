for (let i = 1; i <= 10; i++) {
    console.log("check value i = ", i)
}

for (let i = 1; i <= 10; i++) {
    console.log("check value i++ = ", i++)
}

let arr = ['MU', 'Mancity', 'Liver', 'Chelsea']
for (let i = 0; i < arr.length; i++) {
    console.log("check value arr = ", arr[i]) //= arr.length = undefined
}

//var issue - pham vi rong xuyen suot code
var k = 0;
var arr1 = ['MU', 'Mancity', 'Liver', 'Chelsea']
for (var k = 0; k < arr1.length; k++) {
    console.log("check value arr1 = ", arr1[k])
}
console.log("check value k = ", k)      //return 4 as it counts from arr1 index 0,1,2,3 to 4

//let - xu li var issue
let m = 0;
let arr2 = ['MU', 'Mancity', 'Liver', 'Chelsea']
for (let m = 0; m < arr2.length; m++) { 
    console.log("check value arr2 = ", arr2[m])
}
console.log("check value m = ", m)      //ngoai ham coi nhu khong the su dung gia tri cu cua m

//i++ and ++i
for (let p = 0; p < arr2.length; p++) { 
    console.log("check value arr2[p] with p++ = ", arr2[p], p)
}
for (let q = 0; q < arr2.length; ++q) { 
    console.log("check value arr2[q] with ++q = ", arr2[q], q)
}

x = 0;
y = x++;            //tang gia tri x len 1, nhung tra ve gia tri goc truoc khi tang roi gan cho y
console.log(x, y)

u = 0;
v = ++u;            //tang gia tri len 1, u duoc assign +1, tang gia tri bien u len 1 roi assign cho v, roi in u,v
console.log(u, v)


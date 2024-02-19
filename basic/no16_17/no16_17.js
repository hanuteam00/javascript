let arr16 = ['Man city', 'Liverpool', 'MU', 'Chelsea']

/* not work if declar i out of for loops
let i = 0;
for (i < arr16.length; i++){
    console.log('Top:', i+1, arr16[i])
}
*/

for (let i = 0; i < arr16.length; i++){
    console.log('Top:', i+1, arr16[i])
}

let j = 0;
while(j < arr16.length){
    console.log('while')
    console.log('Top:', j+1, arr16[j])
    j++;
}

let k = 0;
do{
    console.log('do while')
    console.log('Top:', k+1, arr16[k])
    k++;
}
while (k < 0)

let arrTop1 = ['Man city', 'Chelsea', 'MU', 'Liver']

let m = 0;
console.log('arrTop1.length: ', arrTop1.length)
console.log('arrTop1[m].length: ', arrTop1[m].length)
while (m < arrTop1.length){
    // console.log('Top club: ', m+1, arrTop1[m])
    // m++;

    //if else statement
    if (arrTop1[m].length === 5){       //Liver = 5
        console.log('Top club no: ', m+1, arrTop1[m])   //index = 1
    }
    else if (arrTop1[m].length === 8){  //Man City = 8
        console.log('Top club no: ', m+1, arrTop1[m])   //index = 0
    }
    else if (arrTop1[m].length === 2){  //MU = 2
        console.log('Top club no: ', m+1, arrTop1[m])   //index = 2
    }
    else if (arrTop1[m].length === 4){  //no team have 4 characters
        console.log('Top club no: ', m+1, arrTop1[m])   //index = N/A

    }
    else{
        console.log('N/A')
    }
    m++;
}

let n = 0;
while (n < arrTop1.length){
    console.log('>>> Check n: ', n)
    if (arrTop1[n] === 'Chelsea'){
        console.log('Found it: ', arrTop1[n])
        break;  //stop ngay tai day
    }
    n++;
}
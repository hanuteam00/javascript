//1.Example
function myDisplayer(some) {
    console.log(some);
}

let myPromise = new Promise(function (myResolve, myReject) {
    let x = 0;

    // The producing code (this may take some time)

    if (x == 0) {
        myResolve("OK");
    } else {
        myReject("Error");
    }
});

myPromise.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);

//2. Waiting for a Timeout
//2.1. Example Using Callback
setTimeout(function () { myFunction("Callback - I love You!"); }, 1000);

function myFunction(value) {
    console.log(value);
}
//2.2. Example Using Promise
let myPromise2 = new Promise(function (myResolve, myReject) {
    setTimeout(function () {
        myResolve("Promise - I love You!");
    }, 1000);
});

myPromise2.then(function (value) {
    console.log(value)
});

//3. Waiting for a file
//3.1. Example using Callback
function getFile(myCallback) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.html");
    req.onload = function () {
        if (req.status == 200) {
            myCallback(req.responseText);
        } else {
            myCallback("Error: " + req.status);
        }
    }
    req.send();
}

getFile(myDisplayer);

/*3.2. Example using Promise
let myPromise3 = new Promise(function (myResolve, myReject) {
    let req = new XMLHttpRequest();
    req.open('GET', "mycar.htm");
    req.onload = function () {
        if (req.status == 200) {
            myResolve(req.response);
        } else {
            myReject("File not Found");
        }
    };
    req.send();
});

myPromise3.then(
    function (value) { myDisplayer(value); },
    function (error) { myDisplayer(error); }
);
*/
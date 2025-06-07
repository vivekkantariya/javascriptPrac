let mode = "light";
let color;

if (mode === "dark") {
    color = "black"
}
if (mode === "light") {
    color = "white"
}

console.log(color);

let usrname = prompt("Enter the Username : ");

let con = "@" + usrname + usrname.length;

console.log(con);

// Arrays

// P1
let markarr = [85,97,44,37,76,60]

let sum = 0;

for (let i = 0; i < markarr.length; i++) {
    sum  = sum + markarr[i];
}

let avg = sum/6
console.log("sum is",sum);   
console.log("average is",avg);   

// P2
let pricearr = [250,645,300,900,50]

for (let dis in pricearr) {
    let offer = pricearr[dis] / 10
    pricearr[dis] -= offer
    console.log(pricearr[dis])
}

// P3 
let companiesarr = ["bloomberg","microsoft","uber","google","IBM","netflix"]

console.log(companiesarr)
console.log(companiesarr.shift())
let pushed = companiesarr.push("amazon")
console.log(companiesarr)

let replace = companiesarr.splice(1,1,"ola")
console.log(companiesarr)
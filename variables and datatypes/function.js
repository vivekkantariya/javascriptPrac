function greet(msg){
    console.log("Hello", msg)
}

greet("vivek");

// Sum Function 
function total(x,y){
    let carry = x + y;
    console.log(carry)
}

total(5,6);

// Sum Function 
function Sum(x,y){
    let carry = x + y;
    return carry 
}

let temp = Sum(5,5);
console.log(temp)

// Arrow function 
let arrowsum = (a,b) => {
    console.log(a+b)
}
let arrowmul = (a,b) => {
    console.log(a*b)
} 

// foreach loop 
console.log("With simple function")            
let arr = [5,7,8,15,36]

    // here the val is the value of each index 
    arr.forEach(function printval(val){
        console.log(val);
    })    
// foreach loop 


console.log("With arrow function")            
let arr1 = ["Pune", "delhi", "mumbai", "rajkot"]

    // here the val is the value of each index 
    arr1.forEach((val) => {
        console.log(val);
    })    


let arrnums = [8,78,6,45,12,65,]
    
let calcsquare = (num) => {
    console.log(num*num)
}

arrnums.forEach(calcsquare);


// ForEach loop :
//     Note : a callback function passed as an argument to another function 

//     let arr = [5,7,8,15,36]

//     here the val is the value of each index 
//     arr.foreach(function printval(val){
//         console.log(val);
//     })    

//     with arrow function 
//     arr1.forEach((val) => {
//         console.log(val);
//     })      

//     syntax: 
//         arr.forEach(callbackfunction)
//         containss three parameters (value,index,array)

//     callbackfunction : here it is a function to execute for each element in the array 

//     Note : a callback function passed as an argument to another function 
    
//     can only be used for arrays not for stirngs

// note : higher order function/methods : 
//     are the function or the methods that either take another function has a parameter inside or they return another function has there output
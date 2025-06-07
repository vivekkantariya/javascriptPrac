const product = {
    product_name  : "Parker jotter standard GT ball pen(Black)",
    rating : 4,
    isdeal: true,
    price:270,
};

console.log(product)

console.log("question - 2")

const profiel = {
    name : "shradha khapra",
    desc : "apnacollege | to educate someone is the highest privileadge ",
    followers : '155k',
    isfollow: false,
};

console.log(profiel) 
console.log(typeof profiel["isfollow"]) 

// function practice 

function vowelscheck(sen){
    let count = 0;
    let checkvowel = prompt("Enter a string : ");

    for (let i of checkvowel) {
        console.log(i)
        if (i === "a" ||i === "e" ||i === "i" ||i === "o" ||i === "u") {
            console.log("Contains vowel")
            count++;    
        }else{
            console.log("not Contains vowel")
        };
    }
    return count
};

let count = vowelscheck()
console.log(count)

// With arrow function 
let arrvowelscheck = (msg) => {
    let count = 0;
    let checkvowel = prompt("Enter the string for arrow vowel check : ");

    for (let i of checkvowel) {
        if (i === "a" ||i === "e" ||i === "i" ||i === "o" ||i === "u") {
            console.log("Contains Vowel")       
            count++;     
        }else{
            console.log("Ghanta Vowel")            
        }
    }
    return count;
}

// foreach practice
let arrnum = [2,5,8,6,4,1]

arrnum.forEach((val) => {
    let sq = (val*val);
    console.log(sq)
})

// array methods practice 
let arrf = [78,80,90,50,94,96,92,95,89,98]

let marksfilter = arrf.filter((val) => {
    return val > 90;
})

console.log(marksfilter)

// 1 to n 

let arrnumber = prompt("Enter the number : ");

let arr = [];
for (let i = 0; i <= arrnumber ; i++) {
    arr[i-1] = i; 

}
let sum = arr.reduce((res,cur) => {
    return res + cur 
})

let fact = arr.reduce((res,cur) => {
    return res * cur
})
console.log(arr)
console.log(sum)
console.log(fact)
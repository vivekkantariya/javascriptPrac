// map:
let arrm = [2,8,5,1,6,9,4,0,51]

let some = arrm.filter((val) => {
    return val % 3 === 0;
})

console.log(some)

// filter:
let arrf = [2,8,5,1,6,9,4,0,51]

let even = arrf.filter((val) => {
    return val % 2 === 0;
})

console.log(even)
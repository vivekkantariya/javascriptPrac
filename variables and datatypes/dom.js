console.dir(document.body)
console.dir(document.body.childNodes[0])
console.log(document.body.childNodes[0])
console.dir(document.body.childNodes[1])
console.log(document.body.childNodes[1])

document.body.childNodes[3].textContent = "hello welcome to dom";

let heading = document.getElementById("heading")
console.dir(heading)

let classinside = document.getElementsByClassName("inside")
console.dir(classinside)

let tagpara = document.getElementsByTagName("p");
console.dir(tagpara);

let querypara = document.querySelector("p");        // returns the first one 
console.dir(querypara)

let queryallpara = document.querySelectorAll("p");        // returns all elements
console.dir(queryallpara) 

let allbody = document.querySelector("body");        // returns all elements
console.dir(allbody) 

let allinner = document.querySelector("div");        // returns all elements
console.dir(allinner) 

// DOM part - 2
// Step - 1 created the element 
let newel = document.createElement("button")
newel.innerText = "newbtn"

// Step -2 inserting the element in the Document 
let newbtn = document.querySelector("div")
newbtn.append(newel)    // at the end of the node 
newbtn.prepend(newel)    // at the start of the node 
newbtn.before(newel)    // at before the node 
newbtn.after(newel)    // at after the node 


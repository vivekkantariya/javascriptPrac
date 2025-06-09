let chgcontent = document.querySelector("h2")
chgcontent.innerText = "Learning DOM, changes via JS "

let boxbody = document.querySelector("body")
boxbody.children
boxbody.children[1]
boxbody.children[1].innerText = "div 1 changed"
boxbody.children[2].innerText = "div 2 changed"
boxbody.children[3].innerText = "div 3 changed"

let box = document.querySelectorAll("commonclass")
for (div of box) {
    box.innerText
    console.log(div)
}

// Dom 2 practice 
let newbtn = document.createElement("button")
newbtn.innerText = "Click Me!"

newbtn.style.backgroundColor  = "red"
newbtn.style.color  = "white"

let insertbtn = document.querySelector("body")
insertbtn.prepend(newbtn)
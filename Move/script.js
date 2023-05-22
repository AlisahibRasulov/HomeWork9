let main = document.querySelector(".main");
let move = document.querySelector(".move");



let leftPos = 0;
let topPos = 0;
let mainHeight = main.offsetHeight - 2;
let mainWidth = main.offsetWidth - 2;
let moveHeight = move.offsetHeight;
let moveWidth = move.offsetWidth;

// console.log(MoveHeight)

document.body.addEventListener("keyup", (e) => {

    console.log(e.which)
    if(e.which == 39 && leftPos < mainWidth - moveWidth){
        leftPos += 10
    } 
    if(e.which == 37 && leftPos > 0){
        leftPos -= 10
    } 
    if(e.which == 40 && topPos < mainHeight -  moveHeight){
        topPos += 10
    } 
    if(e.which == 38 && topPos > 0){
        topPos -= 10
    } 
    move.style.left = leftPos + "px";
    move.style.top = topPos + "px";
})
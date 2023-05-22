let slider = document.querySelector("#slider");
let leftBtn = document.querySelector(".left");
let rightBtn = document.querySelector(".right");
let image = document.querySelector(".img");


const dataImages = [
    {
        id: 1,
        img: "https://e0.pxfuel.com/wallpapers/701/849/desktop-wallpaper-resimler-super-creativ.jpg",
     },
     {
        id: 2,
        img: "https://e1.pxfuel.com/desktop-wallpaper/153/473/desktop-wallpaper-start-and-finish-line-widescreen-finish.jpg",
     },
     {
        id: 3,
        img: "https://c1.wallpaperflare.com/preview/611/947/729/road-vintage-summer-landscape.jpg",
     },
]


dataImages.map((item) => {
    image.innerHTML += ` 
    <div class="item">
    <img src=${item.img} alt="">
  </div>
    `
})
slider.children[0].children[0].classList.add("active");
// image.firstChild.classList.add("active");



const rightBtnFunction = () => {
    let activeImg = document.querySelector(".active");
    // console.log(activeImg.nextElementSibling)
    if(activeImg.nextElementSibling !== null){
        activeImg.nextElementSibling.classList.add("active");
        activeImg.classList.remove("active");
    }else{
        slider.children[0].children[0].classList.add("active");
        activeImg.classList.remove("active")
    }
};

const leftBtnFunction = () => {
    let activeImg = document.querySelector(".active");
    if(activeImg.previousElementSibling !== null){
        activeImg.previousElementSibling.classList.add("active");
        activeImg.classList.remove("active");
    }else{
        slider.children[0].children[2].classList.add("active");
        // slider.firstChild.lastChild.classList.add("active")
        activeImg.classList.remove("active");
    }
}

rightBtn.addEventListener("click", rightBtnFunction);
leftBtn.addEventListener("click",leftBtnFunction);


document.body.addEventListener("keyup", e => {
    // console.log(e.which);
    if(e.which == 39){
        rightBtnFunction()
    }
})

document.body.addEventListener("keyup", e => {
    // console.log(e.which);
    if(e.which == 37){
        leftBtnFunction()
    }
})
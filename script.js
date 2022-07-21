
// **************************************************searchbutton*******************************************************



let loader = document.getElementsByClassName("loaderSpinner");

document.addEventListener("load", function () {
    loader[0].style.display="none"
});

//******************Animation*******************

let searchbtn = document.getElementById("searchbtn");

searchbtn.addEventListener("mousedown", function (onmousedown) {
    searchbtn.style.width = "30px"
    searchbtn.style.top = "4px"
    searchbtn.style.filter = "contrast(300%)"
    searchbtn.style.transition = "0s ease-in 0s"
});

searchbtn.addEventListener("mouseup", function (onmouseup) {
    searchbtn.style.width = "35px"
    searchbtn.style.top = "2px"
    searchbtn.style.filter = "contrast(100%)"
    searchbtn.style.transition = "0.3s ease-in 0s"
});



// *************************************************Day/Night Mode***************************************************

let daybtn = document.getElementById("day");
let Nightbtn = document.getElementById("Night");
let body = document.querySelector('body');
let clouds = document.getElementsByClassName('clouds');
let Footer = document.getElementsByClassName('big_footer');
let smallFooter = document.getElementsByClassName('colorChange');
let twinkle = document.getElementById('twinkle');
let nav = document.getElementById('nav');
let companyName = document.getElementById('companyNames');

Nightbtn.addEventListener('click', function (onclick) {
    Nightbtn.style.display = "None";
    daybtn.style.display = "inline-block";
    daybtn.style.borderColor = "blue";
    body.style.background = "black url(img/stars.png) "
    clouds[0].style.display = "none"
    Footer[0].style.color = "white"
    twinkle.style.display = "block"
    nav.style.background = "black"
    companyName.style.color = "rgb(239, 194, 255)"
    for (i in smallFooter) {
        smallFooter[i].style.color = "rgb(239, 194, 255)"
    };
 
});


daybtn.addEventListener('click', function (onclick) {
    body.style.background = "linear-gradient(to bottom,#ffff 1%, #94c5f8 13%,#a6e6ff 70%,#b1b5ea 100%)"
    daybtn.style.display = "None";
    Nightbtn.style.display = "inline-block";
    clouds[0].style.display = "inline-block"
    body.style.overflowx = "hidden"
    Footer[0].style.color = "black"
    twinkle.style.display = "none"
    nav.style.background = "transparent"
    companyName.style.color = "black"
    for (i in smallFooter) {
        smallFooter[i].style.color = "black"
    };

});

//***************************************DropDown List********************** */

let dropListBtn = document.getElementById('dropListBtn');
let upListBtn = document.getElementById('upListBtn');
let dropList = document.getElementById('dropList')
let dropListBg = document.getElementById('dropListBg')

dropListBtn.addEventListener('click' , function (onclick){
    dropList.style.display = "inline-block"
    dropListBg.style.display = "inline-block"
    dropListBtn.style.display="none"
    upListBtn.style.display="inline-block"
})

upListBtn.addEventListener('click' , function (onclick){
    dropList.style.display = "none"
    dropListBg.style.display = "none"
    dropListBtn.style.display="inline-block"
    upListBtn.style.display="none"
})


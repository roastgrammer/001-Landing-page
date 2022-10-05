// menu
var menu = document.getElementById("bar");
menu.addEventListener("click" , function(){
    var show = document.getElementById("menu").classList.toggle("show-menu");  
    menu.classList.toggle("bar");
})
// imge slider showing
const address = document.getElementById("TheBox");
var addresses = ["city.jpg","beach.jpg","person_mountain_2.jpg","swim.jpg"];
address.style.transition = '1s';
function imagechanger(){
    setTimeout(function(){
        address.style.backgroundImage = `url("images/${addresses[0]}")`;
    },2000)
    setTimeout(function(){
        address.style.backgroundImage = `url("images/${addresses[1]}")`;
    },4000)
    setTimeout(function(){
        address.style.backgroundImage = `url("images/${addresses[2]}")`;
    },6000)
    setTimeout(function(){
        imagechanger();
        address.style.backgroundImage = `url("images/${addresses[3]}")`;
    },8000)
    
}
imagechanger();

// Hamburger
const hamburger = document.querySelector(".hamburger");
const menuList = document.querySelector(".menu-list");
const navLink = document.querySelectorAll(".menu__link");

navLink.forEach(n => n.addEventListener("click", ()=>{
    hamburger.classList.remove("active");
    menuList.classList.remove("active");
}));



hamburger.addEventListener("click", ()=>{
    hamburger.classList.toggle("active");
    menuList.classList.toggle("active");
})


// sliders
$(document).ready(function(){
    $('.slidar').slick({
        arrows: false,
        dots: false,
        autoplay:true,
        speed: 800,
        slidesToShow: 3,
        slidesToScroll: 1
    });
});


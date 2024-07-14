const scrollBar = document.querySelector("header");
const navColor = document.querySelector(".h11");
const tienda = document.querySelector(".tienda");

window.addEventListener("scroll", ()=>{
    scrollBar.classList.toggle("sticky", window.scrollY > 1 );
    
    document.querySelectorAll(".nav-bar").forEach((nav) =>{
    nav.classList.toggle("black", window.scrollY > 560);
})

    navColor.classList.toggle("black", window.scrollY > 560);
    tienda.classList.toggle("black-img", window.scrollY > 560);

});




// Hide upper navbar on scroll
function hideUpperNav(){
    if (document.body.scrollY >= 200 ) {
        document.querySelector(".upper-nav").getElementsByClassName.display = "none";
    } 
};

window.addEventListener("scroll", hideUpperNav);
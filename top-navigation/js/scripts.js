/* nav background color */ 
window.onscroll = function navColor() {
    if (document.body.scrollTop > 250 || document.documentElement.scrollTop > 250) {
        document.getElementById("js-nav").classList.add("nav--is-active");
    } else {
        document.getElementById("js-nav").classList.remove("nav--is-active");
    }
}


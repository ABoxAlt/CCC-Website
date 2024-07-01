const navbar = document.querySelector(".navbar");
const navImg = document.querySelector("#navImg")
const widthText = document.querySelector("#widthText");

function navFunc() {
    if (window.innerWidth <= 910) {
        navbar.classList.add("disable");
        navImg.classList.add("navImgPadding");
    } else {
        if (navbar.classList.contains("disable")) {
            navbar.classList.remove("disable");
            navImg.classList.remove("navImgPadding");
        }
    }
}

window.addEventListener("resize", navFunc);
navFunc();
const navbar = document.querySelector(".navbar");
const navImg = document.querySelector("#navImg")

const navButton = document.querySelector("#dropDownMenu")

function navFunc() {
    if (window.innerWidth <= 910) {
        navbar.classList.add("disable");
        navImg.classList.add("navImgPadding");
        
        navButton.classList.remove("disable");
        navButton.classList.add("enable");
    } else {
        if (navbar.classList.contains("disable")) {
            navbar.classList.remove("disable");
            navImg.classList.remove("navImgPadding");

            navButton.classList.remove("enable")
            navButton.classList.add("disable");
        }
    }
}

window.addEventListener("resize", navFunc);
navFunc();
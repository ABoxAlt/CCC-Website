const navButton = document.querySelector("#dropDownMenu");
const navMenu = document.querySelector("#navMenuBackground");

function navMenuOpen(e) {
  if (navMenu.classList.contains("disable")) {
    navMenu.classList.remove("disable");
    navMenu.classList.add("enable");
  } else {
    navMenu.classList.remove("enable");
    navMenu.classList.add("disable");
  }
}


navButton.addEventListener("click", navMenuOpen);
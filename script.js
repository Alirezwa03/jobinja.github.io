const userContainer = document.querySelector(".user-container");
const moreTools = document.querySelector(".moreTools");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const hamburgerMenuContainer = document.querySelector(
  ".hamburgerMenuContainer"
);

let clickMenu = false;
let clickTools = false;

hamburgerMenu.addEventListener("click", hamburgerMenuHandler);
userContainer.addEventListener("click", toolsHandler);



function hamburgerMenuHandler() {
  clickMenu = !clickMenu;
  if (clickMenu) {
    hamburgerMenuContainer.classList.add("hamburgerMenuOpen");
    hamburgerMenuContainer.classList.remove("hamburgerMenuClose");
    return;
  }
  hamburgerMenuContainer.classList.remove("hamburgerMenuOpen");
  hamburgerMenuContainer.classList.add("hamburgerMenuClose");
}

function toolsHandler() {
  clickTools = !clickTools;
  if (clickTools) {
    moreTools.classList.remove("toolsClose");
    moreTools.classList.add("toolsShow");
    return;
  }
  moreTools.classList.remove("toolsShow");
  moreTools.classList.add("toolsClose");
}

const btnOpen = document.querySelector(".btn-open");
const btnClose = document.querySelector(".btn-close");
const menu = document.querySelector(".nav-group");

let openMenu = false;

btnOpen.addEventListener("click", handleBtnClick);
btnClose.addEventListener("click", handleBtnClick);

// Clic sur le bouton open/close du menu mobile
function handleBtnClick() {
    openMenu = !openMenu;

    if (openMenu) {
        btnOpen.style.display = "none";
        btnClose.style.display = "block";
        menu.classList.add('active');
    } else {
        btnClose.style.display = "none";
        btnOpen.style.display = "block";
        menu.classList.remove('active');
    }
}

function openMenu() {
    document.body.classList.add("menu--open");
    document.querySelector(".menu").setAttribute("aria-hidden", "false");
}

function closeMenu() {
    document.body.classList.remove("menu--open");
    document.querySelector(".menu").setAttribute("aria-hidden", "true");
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeMenu();
});

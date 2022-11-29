const toggleBtn = document.querySelector(".toggleBtn");
const line_a = document.querySelector(".line2");
const Menu_a = document.querySelector(".Menu");

toggleBtn.addEventListener("click" , () => {
    line_a.classList.toggle("line2-a");
    Menu_a.classList.toggle("Menu-a");
});
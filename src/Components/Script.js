import { click } from "@testing-library/user-event/dist/click";
const bar = document.getElementById("bar");
const nav = document.getElementById("navbar");
if (bar) {
  bar.addEventListener("click", () => {
    nav.classList.add("active");
  });
}

/* Keep in sync with --bp-nav-collapse in styles.css */
const navCollapseMq = window.matchMedia("(max-width: 1100px)");

function toggleNav() {
  let ul = document.getElementById("hamburger-contents");
  if (!navCollapseMq.matches) return;
  const open = ul.style.display === "flex";
  ul.style.display = open ? "none" : "flex";
  try {
    const ham = document.querySelector("svg.hamburger");
    if (ham) ham.classList.toggle("open", !open);
  } catch (e) {}
}

function syncNavMenuDisplay() {
  let ul = document.getElementById("hamburger-contents");
  if (!ul) return;
  if (!navCollapseMq.matches) {
    ul.style.removeProperty("display");
    try {
      document.querySelector("svg.hamburger")?.classList.remove("open");
    } catch (e) {}
  } else if (ul.style.display !== "flex") {
    ul.style.display = "none";
  }
}

navCollapseMq.addEventListener("change", syncNavMenuDisplay);
addEventListener("resize", syncNavMenuDisplay);
document.addEventListener("DOMContentLoaded", syncNavMenuDisplay);

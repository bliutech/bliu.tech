function toggleNav() {
  let ul = document.getElementById("hamburger-contents");
  ul.style.display = ul.style.display === "block" ? "none" : "block";
  // animate hamburger into an X by toggling the `open` class
  try {
    const ham = document.querySelector("svg.hamburger");
    if (ham) ham.classList.toggle("open");
  } catch (e) {}
}

/* fixes resizing issue with hamurger menu */
addEventListener("resize", () => {
  let ul = document.getElementById("hamburger-contents");
  if (window.innerWidth > 920) {
    ul.style.display = "block";
  } else {
    ul.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // Ensure hamburger menu initial state
  let ul = document.getElementById("hamburger-contents");
  if (ul) {
    if (window.innerWidth > 920) ul.style.display = "block";
    else ul.style.display = "none";
  }
});

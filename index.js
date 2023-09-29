function toggleNav() {
  let ul = document.getElementById("hamburger-contents");
  ul.style.display = ul.style.display === "block" ? "none" : "block";
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

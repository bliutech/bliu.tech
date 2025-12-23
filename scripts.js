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

/* Theme toggle: inject button, persist preference, and initialize */
function applyTheme(theme) {
  const html = document.documentElement;
  if (theme === "dark") html.classList.add("dark");
  else html.classList.remove("dark");
}

function saveTheme(theme) {
  try {
    localStorage.setItem("theme", theme);
  } catch (e) {}
}

function getSavedTheme() {
  try {
    return localStorage.getItem("theme");
  } catch (e) {
    return null;
  }
}

function createThemeToggle() {
  if (document.getElementById("theme-toggle")) return;
  const btn = document.createElement("button");
  btn.id = "theme-toggle";
  btn.className = "theme-toggle";
  btn.setAttribute("aria-label", "Toggle dark mode");
  btn.setAttribute("title", "Toggle dark mode");

  function updateIcon() {
    const isDark = document.documentElement.classList.contains("dark");
    btn.textContent = isDark ? "🌙" : "☀️";
    btn.setAttribute("aria-pressed", isDark ? "true" : "false");
  }

  btn.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    saveTheme(isDark ? "dark" : "light");
    updateIcon();
  });

  // insert into nav: place before hamburger if present, otherwise append to nav
  const nav = document.querySelector("nav");
  const hamburger = nav ? nav.querySelector(".hamburger") : null;
  if (hamburger && hamburger.parentNode)
    hamburger.parentNode.insertBefore(btn, hamburger);
  else if (nav) nav.appendChild(btn);

  updateIcon();
}

document.addEventListener("DOMContentLoaded", () => {
  // initialize theme from saved preference or system preference
  const saved = getSavedTheme();
  if (saved === "dark" || saved === "light") {
    applyTheme(saved);
  } else if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    applyTheme("dark");
  }

  createThemeToggle();

  // react to system changes if user hasn't set a preference
  try {
    if (!saved && window.matchMedia) {
      window
        .matchMedia("(prefers-color-scheme: dark)")
        .addEventListener("change", (e) => {
          applyTheme(e.matches ? "dark" : "light");
          const toggle = document.getElementById("theme-toggle");
          if (toggle) toggle.textContent = e.matches ? "🌙" : "☀️";
        });
    }
  } catch (e) {}
});

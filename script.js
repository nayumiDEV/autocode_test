const nav = document.querySelector(".nav");
const toggle = document.querySelector(".nav__toggle");
const yearTarget = document.getElementById("year");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav?.classList.toggle("is-open");
  });
}

document.addEventListener("click", (event) => {
  if (!nav || !toggle) {
    return;
  }

  if (!nav.contains(event.target)) {
    nav.classList.remove("is-open");
  }
});

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear().toString();
}


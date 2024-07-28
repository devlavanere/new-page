const themeToggle = document.getElementById("theme-toggle")
const themeIcon = document.getElementById("theme-icon")

export function toggleTheme() {
  document.body.classList.toggle("dark-mode")

  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("bx-sun")
    themeIcon.classList.add("bx-moon")
  } else {
    themeIcon.classList.remove("bx-moon")
    themeIcon.classList.add("bx-sun")
  }
}

themeToggle.addEventListener("click", toggleTheme)

let menuIcon = document.querySelector("#menu-icon")
let navbar = document.querySelector(".navbar")
let sections = document.querySelectorAll("section")
let navLinks = document.querySelectorAll("header nav a")

export function handleScroll() {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150
    let height = sec.offsetHeight
    let id = sec.getAttribute("id")

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active")
        let link = document.querySelector('header nav a[href*=' + id + ']')
        if (link) {
          link.classList.add("active")
        }
      })
    }
  })
}

export function toggleMenu() {
  menuIcon.classList.toggle("bx-x")
  navbar.classList.toggle("active")
}

menuIcon.onclick = toggleMenu
window.onscroll = handleScroll

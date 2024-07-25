let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

// Função para adicionar a classe 'active' ao link do menu correspondente à seção atual
window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");

        // Encontre o link correspondente
        let link = document.querySelector('header nav a [href*=' + id + "]");

        // Verifique se o link existe antes de acessar a propriedade classList
        if (link) {
          link.classList.add("active");
        }
      });
    }
  });
};

// Toggle do menu mobile
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
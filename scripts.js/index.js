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
        document
          .querySelector('header nav a [href*=' + id + "]")
          .classList.add("active");
      });
    }
  });
};

// Toggle do menu mobile
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Inicializa o Swiper
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Formulário de contato
const contactForm = document.querySelector("form");
const submitButton = contactForm.querySelector("input[type='submit']");
const messageInput = contactForm.querySelector("textarea");

// Função para enviar dados do formulário para o Local Storage
function submitForm(event) {
  event.preventDefault();
  
  const formData = new FormData(contactForm);
  
  // Validação básica (pode ser expandida)
  if (!formData.get("Full Name") || !formData.get("Email") || !formData.get("Subject") || !formData.get("Your Message")) {
    displayMessage("Por favor, preencha todos os campos.", "error");
    return;
  }
  
  // Salva os dados no Local Storage
  try {
    const data = {};
    for (const [key, value] of formData.entries()) {
      data[key] = value;
    }
    localStorage.setItem("contactFormData", JSON.stringify(data));
    
    // Limpa o formulário após o envio
    contactForm.reset();
    
    displayMessage("Mensagem enviada com sucesso!", "success");
  } catch (error) {
    console.error("Erro ao salvar dados no Local Storage:", error);
    displayMessage("Ocorreu um erro ao enviar a mensagem.", "error");
  }
}

// Função para exibir uma mensagem para o usuário
function displayMessage(message, type) {
  // Cria um elemento <div> para a mensagem
  const messageElement = document.createElement("div");
  messageElement.className = `message ${type}`;
  messageElement.textContent = message;

  // Adiciona a mensagem ao final do formulário
  contactForm.appendChild(messageElement);

}

// Adiciona o listener para o evento 'submit' do formulário
contactForm.addEventListener("submit", submitForm);
// Obter o botão de alternar tema
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");

// Função para alternar o tema
function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  // Alterar o ícone do botão
  if (document.body.classList.contains("dark-mode")) {
    themeIcon.classList.remove("bx-sun");
    themeIcon.classList.add("bx-moon");
  } else {
    themeIcon.classList.remove("bx-moon");
    themeIcon.classList.add("bx-sun");
  }
}

// Adicionar um ouvinte de eventos para o botão
themeToggle.addEventListener("click", toggleTheme);
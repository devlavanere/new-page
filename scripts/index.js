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
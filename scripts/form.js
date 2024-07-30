const responseMessage = document.getElementById('response-message')
const messagesContainer = document.getElementById('messages-container')
const form = document.getElementById('contact-form')

document.addEventListener('DOMContentLoaded', () => {

    form.addEventListener('submit', async (event) => {
        event.preventDefault()

        const formData = new FormData(form)
        const data = {}
        formData.forEach((value, key) => {
            data[key] = value
        })

        // Validações
        if (!validateForm(data)) {
            alert('Por favor, preencha todos os campos corretamente.')
            return
        }

        // Gerar ID único
        const id = generateId()

        // Armazenar no Local Storage
        saveToLocalStorage(id, data)

        // Enviar via AJAX
        try {
            await sendForm(data);
            showResponseMessage();
            clearForm(form);
            displayMessages();
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar a mensagem.')
        }
    })

    // Mostrar mensagens ao carregar a página
    displayMessages()
})

function validateForm(data) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^\(\d{2}\)\d{4,5}-\d{4}$/;
    return data['full-name'] && emailPattern.test(data['email']) && phonePattern.test(data['phone-number']) && data['subject'] && data['message']
}

function generateId() {
    return 'msg_' + Date.now()
}

function saveToLocalStorage(id, data) {
    let messages = JSON.parse(localStorage.getItem('messages')) || {}
    data.visible = true // Adiciona a chave de visibilidade
    messages[id] = data
    localStorage.setItem('messages', JSON.stringify(messages))
}

async function sendForm(data) {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        mode: 'cors'
    })
    if (!response.ok) {
        throw new Error('Network response was not ok')
    }
}

function showResponseMessage() {
    responseMessage.style.display = 'block'
}

function closeResponseMessage() {
    responseMessage.style.display = 'none'
}

function clearForm(form) {
    form.reset()
}

function displayMessages() {
    messagesContainer.innerHTML = ''
    const messages = JSON.parse(localStorage.getItem('messages')) || {}

    for (const [id, message] of Object.entries(messages)) {
        if (!message.visible) continue; // Ignora mensagens ocultas
        const messageDiv = document.createElement('div')
        messageDiv.className = 'message'
        messageDiv.id = `message-${id}`
        messageDiv.innerHTML = `
            <button class="close-btn" onclick="hideMessage('${id}')">&times;</button>
            <h3>${message['full-name']}</h3>
            <p>Email: ${message['email']}</p>
            <p>Telefone: ${message['phone-number']}</p>
            <p>Assunto: ${message['subject']}</p>
            <p>Mensagem: ${message['message']}</p>
            <button onclick="editMessage('${id}')">Editar</button>
            <button onclick="deleteMessage('${id}')">Deletar</button>
        `
        messagesContainer.appendChild(messageDiv)
    }
}

function hideMessage(id) {
    const messages = JSON.parse(localStorage.getItem('messages')) || {}
    if (messages[id]) {
        messages[id].visible = false;
        localStorage.setItem('messages', JSON.stringify(messages))
        displayMessages()
    }
}

function editMessage(id) {
    const messages = JSON.parse(localStorage.getItem('messages')) || {}
    const message = messages[id];
    const form = document.getElementById('contact-form')

    for (const key in message) {
        if (message.hasOwnProperty(key) && key !== 'visible') {
            form.elements[key].value = message[key]
        }
    }

    form.addEventListener('submit', function updateMessage(event) {
        event.preventDefault()
        const updatedData = getFormData()
        updatedData.visible = true; // Garante que a mensagem seja visível
        messages[id] = updatedData;
        localStorage.setItem('messages', JSON.stringify(messages))
        displayMessages();
        form.removeEventListener('submit', updateMessage)
    }, { once: true });
}

function deleteMessage(id) {
    const messages = JSON.parse(localStorage.getItem('messages')) || {}
    delete messages[id];
    localStorage.setItem('messages', JSON.stringify(messages))
    displayMessages();
}

function getFormData() {
    const form = document.getElementById('contact-form')
    const formData = new FormData(form)
    const data = {}
    formData.forEach((value, key) => {
        data[key] = value
    })
    return data
}
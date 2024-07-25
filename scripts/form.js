document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');
    const messagesContainer = document.getElementById('messages-container');

    form.addEventListener('submit', async (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Validações
        if (!validateForm(data)) {
            alert('Por favor, preencha todos os campos corretamente.');
            return;
        }

        // Gerar ID único
        const id = generateId();

        // Armazenar no Local Storage
        saveToLocalStorage(id, data);

        // Enviar via AJAX
        try {
            await sendForm(data);
            showResponseMessage();
            clearForm(form);
            displayMessages();
        } catch (error) {
            console.error(error);
            alert('Erro ao enviar a mensagem.');
        }
    });

    // Mostrar mensagens ao carregar a página
    displayMessages();
});

function validateForm(data) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    const phonePattern = /^\(\d{2}\) \d{5}-\d{4}$/;
    return data['full-name'] && emailPattern.test(data['email']) && phonePattern.test(data['phone-number']) && data['subject'] && data['message'];
}

function generateId() {
    return 'msg_' + Date.now();
}

function saveToLocalStorage(id, data) {
    let messages = JSON.parse(localStorage.getItem('messages')) || {};
    messages[id] = data;
    localStorage.setItem('messages', JSON.stringify(messages));
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
    });
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
}

function showResponseMessage() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'block';
}

function closeResponseMessage() {
    const responseMessage = document.getElementById('response-message');
    responseMessage.style.display = 'none';
}

function clearForm(form) {
    form.reset();
}

function displayMessages() {
    const messagesContainer = document.getElementById('messages-container');
    messagesContainer.innerHTML = '';
    const messages = JSON.parse(localStorage.getItem('messages')) || {};

    for (const [id, message] of Object.entries(messages)) {
        const messageDiv = document.createElement('div');
        messageDiv.className = 'message';
        messageDiv.id = `message-${id}`;
        messageDiv.innerHTML = `
            <button class="close-btn" onclick="closeMessage('${id}')">&times;</button>
            <h3>${message['full-name']}</h3>
            <p>Email: ${message['email']}</p>
            <p>Telefone: ${message['phone-number']}</p>
            <p>Assunto: ${message['subject']}</p>
            <p>Mensagem: ${message['message']}</p>
            <button onclick="editMessage('${id}')">Editar</button>
            <button onclick="deleteMessage('${id}')">Deletar</button>
        `;
        messagesContainer.appendChild(messageDiv);
    }
}

function closeMessage(id) {
    const messageDiv = document.getElementById(`message-${id}`);
    messageDiv.style.display = 'none';
}

function editMessage(id) {
    const messages = JSON.parse(localStorage.getItem('messages')) || {};
    const message = messages[id];
    const form = document.getElementById('contact-form');

    for (const key in message) {
        if (message.hasOwnProperty(key)) {
            form.elements[key].value = message[key];
        }
    }

    // Remove old entry and save updated message on submit
    form.addEventListener('submit', function updateMessage(event) {
        event.preventDefault();
        deleteMessage(id);
        form.removeEventListener('submit', updateMessage);
    });
}

function deleteMessage(id) {
    const messages = JSON.parse(localStorage.getItem('messages')) || {};
    delete messages[id];
    localStorage.setItem('messages', JSON.stringify(messages));
    displayMessages();
}

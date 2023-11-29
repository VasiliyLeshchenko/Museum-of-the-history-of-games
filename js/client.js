const socket = new WebSocket('ws://localhost:63342'); // Замените на адрес вашего сервера

socket.onopen = () => {
    console.log('Connected to server');
};

socket.onmessage = (event) => {
    const response = event.data;
    // Отобразите ответ от бота, например, добавив его в элемент #chat
    document.getElementById('chat').innerHTML += `<p>${response}</p>`;
};

function sendMessage() {
    const message = document.getElementById('messageInput').value;
    socket.send(message);
    // Дополнительная логика по очистке поля ввода и обработке отправки
}

function clearChat() {
    document.getElementById('chat').innerHTML = '';
}

function toggleBot() {
    const chatBox = document.getElementById('chat');
    chatBox.classList.toggle('collapsed');

    const toggleButton = document.getElementById('toggleBotButton');
    toggleButton.textContent = chatBox.classList.contains('collapsed') ? 'Expand' : 'Collapse';
}

const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 63342 }); // Укажите порт, который вы хотите использовать

server.on('connection', (socket) => {
    console.log('Client connected');

    socket.on('message', (message) => {
        console.log(`Received message: ${message}`);
        const response = processMessage(message);
        socket.send(response);
    });

    socket.on('close', () => {
        console.log('Client disconnected');
    });
});

function processMessage(message) {
    // Ваша логика обработки сообщения и формирования ответа
    if (message.includes('о сайте') || message.includes('сайт') || message.includes('Сайт') || message.includes('О сайте')) {
        return '<p>О чём сайт</p>' +
            '<p>Музей Истории Игр представляет собой уникальное пространство, посвященное<br>' +
            'всем аспектам развития игровой индустрии. Наша миссия - сохранить и передать наследие игр,<br>' +
            'а также вдохновить будущее поколение разработчиков и геймеров.</p>' +
            '<p>Цели Сайта</p>' +
            '<p>Погружение посетителей в захватывающий мир игровой культуры,<br>' +
            'сохранение и передача её богатого наследия.</p>';
    } else if (message.includes('отзыв') || message.includes('Отзыв') || message.includes('отзывы') || message.includes('Отзывы')) {
        return 'Чтобы оставить отзыв о сайте, перейдите во вкладку "Контакты", где вы увидите гугл форму для отзывов, заполните её и отправьте, тогда мы сможем его увидеть.';
    } else if (message.includes('контакты') || message.includes('Контакты')) {
            return 'Вы можете связаться с нами по этой электронной почте: bettercallsaul@problem.money.';
    } else if (message.includes('помощь') || message.includes('Помощь')){
        return '<p>Доступные команды:</p>' +
        '<ul>' +
            '<li>о сайте - Описание сайта, его цели.</li>' +
            '<li>отзывы - Как оставить отзыв о сайте.</li>' +
            '<li>контакты - Как вы сможете с нами связаться.</li>' +
            '<li>помощь - Список команд.</li>';
    } else {
        return 'Извините, не могу распознать ваш запрос. Попробуйте его переформулировать.';
    }
}

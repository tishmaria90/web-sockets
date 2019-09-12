module.parent.io.on('connection', function (socket) {
    socket.on('chat.message', function (data) {
        module.parent.io.emit('chat.message', data);

        module.parent.api.message.store(data);
    });
});

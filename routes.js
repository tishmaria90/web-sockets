module.parent.app.get('/', (request, response) => {
    if (request.session && request.session.user) {
        response.sendFile(__dirname + '/views/index.html');
    } else {
        response.sendFile(__dirname + '/views/login.html');
    }
});

module.parent.app.post('/login', (request, response, next) => {
    if (request.session && request.session.user) return response.redirect('/');

    module.parent.api.user.check(request.body)
        .then(function(user){
            if(user){
                request.session.user = {id: user._id, name: user.name};
                response.redirect('/')
            } else {
                module.parent.api.user.store(request.body).then(function (user) {
                    request.session.user = {id: user._id, name: user.name};
                    response.redirect('/')
                });
            }
        })
        .catch(function(error){
            return next(error)
        });
});

module.parent.app.get('/messages', (request, response) => {
    module.parent.api.message.index().then((messages) => {
        response.send(messages);
    })
});

module.parent.app.post('/messages', (request, response) => {
    if (!request.session || !request.session.user) return response.redirect('/');

    let user = request.session.user;

    module.parent.api.message.store({
        message: request.body.message,
        author: user.id
    });

    response.send('success');
});

module.parent.app.get('/self', (request, response) => {
    if (!request.session || !request.session.user) return response.redirect('/');

    response.send(request.session.user);
});

const app = require('./config/server.js');

const homeRoute = require('./app/routes/home.js');
homeRoute(app);

const chatRoute = require('./app/routes/chat.js');
chatRoute(app);

const contatoRoute = require('./app/routes/contato.js');
contatoRoute(app);

const notFoundRoute = require('./app/routes/404.js');
notFoundRoute(app);

app.listen(process.env.PORT || 3000, () => {
    console.log('Listening on port 3000');
});
const LoginRouter = require('./login.routes');

function route(app) {
    app.use('/login', LoginRouter);
}
module.exports = route;
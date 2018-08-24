const userController = require('./controllers/user-controller');

module.exports = (app) => {

    app.options('/api/*', (req, res) => {
        res.status(201).end()
    });

    app.get('/', (req, res) => {
        res.send({Message: "I am open"})
    })

    // User APIs
    app.post('/api/user/signup', userController.signupUser);
    app.put('/api/user/activate/:token', userController.confirmToken);
    app.get('/api/users', userController.getUsers);
    app.put('/api/user/edit', userController.editUser);
    app.post('/api/user/login', userController.loginAdmin);
}
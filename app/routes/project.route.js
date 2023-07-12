module.exports = (app) =>{
    const users = require('../controllers/user.controller');

    app.get('/user/:id', users.findOne);

}
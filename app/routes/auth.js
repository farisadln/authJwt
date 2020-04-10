module.exports = app => {
    let auth = require('../controllers/auth');

    let router = require("express").Router();

    router.post('/register', auth.register);

    router.post('/login', auth.login);

    app.use('/api/user', router);


    // module.exports = router;
};
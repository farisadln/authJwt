module.exports = app => {
    const verify = require('../validation/verifyToken');
    let dumy = require('../controllers/dumy');

    let router = require("express").Router();

    router.get('/',verify, dumy.getData);

   
    app.use('/api', router);

};
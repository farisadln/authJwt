module.exports = app => {

    let data = require('../controllers/data');

    let router = require("express").Router();

    router.get('/', data.get);

   
    app.use('/api', router);

}
const verify = require('./verifyToken')

exports.get = verify, async (req, res) => {

    res.json({
        data : {
            title : "Joke",
            data : "wht a joke ?"
        }
    });

};
exports.getData =   (req, res) => {

    res.json({
        data : {
            title : "Joke",
            data : "wht a joke ?"
        }
    });

};
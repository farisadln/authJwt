const db = require('../models');
const User = db.auth;
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
const { registerValidation, loginValidation } = require('../validation/auth');
const bcrypt = require('bcrypt');

dotenv.config()

exports.register = async (req, res) => {

    const { error } = registerValidation(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

    const emailExist = await User.findOne({
                                            where : 
                                            { email: req.body.email }
                                        });
    if ( emailExist ) return res.status(400).send('Email already exists');

    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    const user = new User({
                              name: req.body.name,
                              email: req.body.email,
                              password: hashPassword
                          });
    try {
        const saveUser = await user.save();
        res.send({user : user.id});
    } catch (err) {
        res.status(400)
           .send(err);
    }

};

exports.login = async (req, res) => {
    const { error } = loginValidation(req.body);
    if( error ) return res.status(400).send(error.details[0].message);

        const email = await User.findOne({ where:
                                            { email: req.body.email }
                                        });

        if ( !email ) return res.status(400).send('Email is not found');

            const validPass = await bcrypt.compare(req.body.password, email.password);
            if ( !validPass ) return res.status(400).send('Invalid password');

            //Jwt auth

            const token = jwt.sign({
                        id: user.id 
            }, process.env.TOKEN_SECRET);
            

            res.header('auth-token', token).send(token);

};
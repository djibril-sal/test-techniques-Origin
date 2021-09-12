const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt =  require('jsonwebtoken');

exports.signup = (req, res, next) =>{

    bcrypt.hash(req.body.Password, 10)
    .then(hash =>{
        const user = new User({
            email: req.body.email,
            Password: hash,
        });

        user.save()
        .then(() => res.status(200).json({message: 'Utilisateur créé !'}))
        .catch(error => res.status(400).json({error}));

    })

    .catch(error => res.status(400).json({error}));

    



};

exports.login = (req, res, next) => {

    User.findOne({ email: req.body.email})
    .then(user => {
        if (!user) {
            return eres.status(401).json({message: 'Utilisateur non trouvé !'});
        }
        bcrypt.compare(req.body.Password, user.Password)
        .then(valid =>{
            if(!valid) {
                return res.status.json({message: 'Mot de passe incorrect !'});
            }
            res.status(200).json({
                userId: user._id,
                token: jwt.sign(
                    {userId: user._id},
                    'RANDOM_TOKEN_SECRET',

                    {expiresIn: '24'}
                )
            });
            })
        .catch(error => res.status(500).json({error}));

    })
    .catch(error => res.status(400).json({error}));


};
const jwt = require('jsonwebtoken');

module.exports= (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodesToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        const userId = decodesToken.userId;
        if(req.body.userId && req.body.userId != userId) {
            throw 'User ID non valable';
        } else {
            next();
        }


    } catch (error) {
        res.status(401).json({erro: error | 'Requete non authentifié'});
    }
};
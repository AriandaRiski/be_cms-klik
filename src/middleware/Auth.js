const jwt = require('jsonwebtoken');

module.exports = {
    cekLogin : (req, res, next) => {
        try {
            const authHeader = req.header('authorization');
            const token = authHeader && authHeader.split(' ')[1];            

            if (token == null){
                res.status(401).json({message : 'Login dulu, token invalid'});
                return false;
            }

            const decode = jwt.verify(token, 'keysecreet');
            req.auth = decode;
            
            next();
        } catch (error) {
            console.log(error);
            res.status(500).json({msg: error});
        }
    }
}

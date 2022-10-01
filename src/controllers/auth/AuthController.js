const jwt = require('jsonwebtoken');
const authModel = require('../../models/authModel');
const bcrypt        = require('bcrypt');
const salt          = bcrypt.genSaltSync(10);


const getToken = (req, res) => {
    
    const data = authModel.login();

    const token = jwt.sign({ id: data.id , email: data.email }, 'keyscreet');
    res.status(201).json({token: token});
}


const getLogin = async (req, res) => {
    try {
        const username = req.body.username;
        const password = req.body.password;
        const user = await authModel.login(username);    

        if(!user){
             return res.status(201).json({
                message : 'username dan password belum terdaftar'
            });
        }

        const key = user.passwordHash.replace(/^\$2y(.+)$/i, '$2a$1');
        const cekLogin = bcrypt.compareSync(password, key);        

        if(cekLogin){
            const token = await jwt.sign({
                id : user.id,
                email : user.email,
                fullName : user.fullName,
                mobile : user.mobile
            }, 'keysecreet');

            return res.status(201).json({ 
                message : "Login Berhasil",
                id : user.id,
                email : user.email,
                fullName : user.fullName,
                mobile : user.mobile,
                token : token
            });                    

        } else {
            return res.status(201).json({message : 'Periksa kembali password anda'});
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }    
    
}

module.exports = {
    getToken,
    getLogin
}
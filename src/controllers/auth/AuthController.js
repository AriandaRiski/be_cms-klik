const jwt = require('jsonwebtoken');
const authModel = require('../../models/authModel');


const getToken = (req, res) => {
    
    const data = authModel.tesLogin();

    const token = jwt.sign({ id: data.id , email: data.email }, 'keyscreet');
    res.status(201).json({token: token});
}

module.exports = {
    getToken
}
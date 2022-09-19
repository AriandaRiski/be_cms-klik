const userModel = require('./../models/userModel');
const bcrypt        = require('bcrypt');
const salt          = bcrypt.genSaltSync(10);

const getUser = async (req, res) => {
    try {

      const data = await userModel.getUser();        
      res.json({getUser : data});
      
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const getUserById = async (req, res) => {
    try{

        const id = req.params.id
        const data = await userModel.getUserById(id);
        res.json({getUserById : data});
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const createUser = async (req, res) => {
    try {        

        const data = {                
            fullName: req.body.fullName,
            mobile: req.body.mobile,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, salt),
            registeredAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        await userModel.createUser(data)
        res.status(201).json({message :  "berhasil di insert" })        

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const editUser = async (req, res) => {
    try {
        const id = req.params.id;

        const data = {                
            fullName: req.body.fullName,
            mobile: req.body.mobile,
            email: req.body.email,
            passwordHash: bcrypt.hashSync(req.body.passwordHash, salt),
            registeredAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        await userModel.editUser(data, id);
        res.status(201).json({message :  "berhasil di update" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        await userModel.deleteUser(id)
        res.status(201).json({message :  "data berhasil di HAPUS" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}

module.exports = {
     getUser,
     getUserById,
     createUser,
     editUser,
     deleteUser
}
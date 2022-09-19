const knex = require('../config/db');

const getUser = () => {    
    return knex.select('*').from('user');    
}

const getUserById = (id) => {
    return knex('user').where({id : id}).first();
}

const createUser = (data) => {
    return knex('user').insert(data);
}

const editUser = (data, id) => {
    return knex('user').where({id: id}).update(data);
}

const deleteUser = (id) => {
    return knex('user').where({id: id}).delete(id);
}

module.exports = {
    getUser,
    getUserById,
    createUser,
    editUser,
    deleteUser
}

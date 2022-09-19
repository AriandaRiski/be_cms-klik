const knex = require('../config/db');

const getPost = () => {    
    return knex.select('*').from('post');    
}

const getPostById = (id) => {
    return knex('post').where({id : id}).first();
}

const createPost = (data) => {
    return knex('post').insert(data);
}

const editPost = (data, id) => {
    return knex('post').where({id: id}).update(data);
}

const deletePost = (id) => {
    return knex('post').where({id: id}).delete(id);
}

module.exports = {
    getPost,
    getPostById,
    createPost,
    editPost,
    deletePost
}

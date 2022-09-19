const knex = require('../config/db');

const getCategory = () =>{
    const category = knex.select('*');
    category.from('category');
    return category;
}

const getCategorybyId = (id) => {
    return knex('category').where({id : id}).first();
}

const insertCategory = (data) => {
    return knex('category').insert(data);
}

const updateCategory = (data, id) => {
    return knex('category').where({id :id}).update(data);
}

const deleteCategory = (id) => {
    return knex('category').where('id', id).del();
}

module.exports = {
    getCategory,    
    insertCategory,
    updateCategory,
    deleteCategory,
    getCategorybyId
}
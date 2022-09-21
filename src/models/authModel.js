const knex = require('../config/db');

const tesLogin = () => {
    // return knex('user').where({id : id}).first();

    const data =  knex.select('id, email').from('user');
    return data;
}

module.exports = {
    tesLogin
}

const knex = require('../config/db');

module.exports = {
    login : (username) => {
        return knex('user').where('email', username).first();
    }
}

const knex = require('../config/db');

const testJoin = () => {    
    const data = knex.select('c.title as title_category', 'p.title as post_category');
    data.from('post_category as pc');
    data.leftJoin('post as p','pc.postId','=', 'p.id ');
    data.leftJoin('category as c','pc.categoryId', 'c.id ');

    return data;
}

module.exports = {
    testJoin
}
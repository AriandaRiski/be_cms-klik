const postCategory = require('../models/postCategory');

const testJoin = async (req, res) => {
    try {
      const data = await postCategory.testJoin();        
      res.json({testJoin : data});      
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

module.exports  = {
    testJoin
}
const postModel = require('./../models/postModel');

const getPost = async (req, res) => {
    try {

      const data = await postModel.getPost();        
      res.json({getPost : data});
      
    }
    catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const getPostById = async (req, res) => {
    try{

        const id = req.params.id
        const data = await postModel.getPostById(id);
        res.json({getPostById : data});
        
    }catch(error){
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const createPost = async (req, res) => {
    try {        

        const data = {
            authorId : req.body.authorId,            
            parentId: req.body.parentId,
            title: req.body.title,        
            metaTitle: req.body.metaTitle,
            slug: req.body.slug,
            content: req.body.content,
            createdAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        await postModel.createPost(data)
        res.status(201).json({message :  "berhasil di insert" })        

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const editPost = async (req, res) => {
    try {
        const id = req.params.id;

        const data = {
            authorId : req.body.authorId,            
            parentId: req.body.parentId,
            title: req.body.title,        
            metaTitle: req.body.metaTitle,
            slug: req.body.slug,
            content: req.body.content,
            createdAt   : new Date().toISOString().replace(/T/, ' ').replace(/\..+/, '')
        }

        await postModel.editPost(data, id);
        res.status(201).json({message :  "berhasil di update" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}

const deletePost = async (req, res) => {
    try {
        const id = req.params.id;
        await postModel.deletePost(id)
        res.status(201).json({message :  "data berhasil di HAPUS" });

    } catch (error) {
        console.log(error);
        res.status(500).json({msg: error});
    }
}




module.exports = {
     getPost,
     getPostById,
     createPost,
     editPost,
     deletePost
}
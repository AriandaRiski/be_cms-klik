// // router
// app.get('/',(req, res) =>{
//     res.send('halaman berhasil')
// })

// app.get('/json',(req, res) =>{
//     res.status(201).json({nama : 'my name is'});
// })

// app.post('/format-post', (req, res) =>{
//     res.json({
//         nama : req.body.nama,
//         desc : req.body.desc,
//         action : req.query.action

//     })
// })

// app.get('/category', async (req, res) => {
//     try {
//         const category = await getCategory();
//         const blogs = await getBlogs();

//         res.json({
//             category : category,
//             blogs : blogs,
//         });
//     } catch (error) {        
//         res.status(500).json(error);
//     }
// });
//end router

const router = require('express').Router();
const user = require('./routelist/user');
const category = require('./routelist/category');
const post = require('./routelist/post');
const postCategory = require('./routelist/postCategory');

router.use('/user', user);
router.use('/category', category);
router.use('/post', post);
router.use('/postCategory', postCategory);


router.use('/', (req, res) => {
    res.send('HALOO');
});


module.exports = router;
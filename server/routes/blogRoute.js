const express = require('express');
const router = express.Router();

const auth = require('../middleware/auth')

const {getAllBlogs,getBlogsById,createBlog,updateBlog,deleteBlog} = require('../controllers/blogController')








router.get('/',getAllBlogs);
router.get('/:id',getBlogsById);



router.post('/', auth, createBlog);
router.put('/:id', auth, updateBlog);
router.delete('/:id', auth, deleteBlog);



module.exports = router;
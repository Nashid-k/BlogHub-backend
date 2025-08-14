const Blog = require('../models/Blog');


exports.getAllBlogs = async (req, res) =>{
    try {
        console.log("getAllBlogs req",req.body);
        const blogs = await Blog.find().populate('author','name email').sort({createdAt:-1});
        console.log("blogs",blogs);
        res.json(blogs);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}



exports.getBlogsById = async (req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id).populate('author','name email');

        if(!blog){
            return res.status(404).json({error: 'Blog not found'});
        }
        res.json(blog)
    } catch (error) {
        res.status(404).json({error: 'Blog not found'});
    }
}


exports.createBlog = async(req, res) =>{
    try{
        const {title, content} = req.body;
        const blog = new Blog({
            title,
            content,
            author:req.user._id
        });
        await blog.save();
        await blog.populate('author','name email')
        res.status(201).json(blog)
    }catch(error){
        res.status(400).json({error:error.message})
    }
}


exports.updateBlog = async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(404).json({error:'Blog not found'});

        }
        if(blog.author.toString() !== req.user._id.toString()){
            return res.status(403).json({error:'Not authorized to update this blog'});
        }

        const {title, content} = req.body;
        blog.title = title || blog.title;
        blog.content = content || blog.content;

        await blog.save();
        res.json(blog);
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}


exports.deleteBlog = async(req,res)=>{
    try {
        const blog = await Blog.findById(req.params.id);
        if(!blog){
            return res.status(404).json({error:'Blog not found'});

        }
        if(blog.author.toString() !== req.user._id.toString()){
            return res.status(403).json({error:'Not authorized to delete this blog'});
        }
        await Blog.findByIdAndDelete(req.params.id);
        res.json({message:'Blog deleted successfully'})
    } catch (error) {
        res.status(400).json({error:error.message})
    }
}

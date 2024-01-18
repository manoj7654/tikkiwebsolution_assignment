const {blogModal}=require("../modal/blogModal")

const blogValidator=require("../validator/blogValidator")

const creatBlog=async (req, res) => {
    const { title, content, author, userId } = req.body;
    console.log(userId)
    const validationResult = blogValidator.validate(req.body);
    if (validationResult.error) {
      return res.status(400).json({ message: validationResult.error.details[0].message });
    }
    try {
      const newBlog = new blogModal({
        title,
        content,
        author,
        userId,
      });
  
      const savedBlog = await newBlog.save();
  
      res.status(201).json(savedBlog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };


  // Get all blogs
const getAllBlog=async (req, res) => {
    try {
      const blogs = await blogModal.find();
      res.json(blogs);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Getting error while fetching blogs' });
    }
  }


  // Get blog by ID
getBlogById=async (req, res) => {
    const blogId = req.params.id;
  
    try {
      const blog = await blogModal.findById(blogId);
      if (!blog) {
        return res.status(404).json({ message: 'Blog not found' });
      }
  
      res.json(blog);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Getting error while fetching blog by id' });
    }
  };


  const updateBlogById=async (req, res) => {
    const blogId = req.params.id;
    const { title, content, author, userId } = req.body;
    const result=await blogModal.findOne({"_id":blogId});
    const userId_in_blog=result.userId;
    const userId_making_req=req.body.userId
    try {

        if(userId_making_req!==userId_in_blog){
            res.json({'message':'You are not authorized'})
        }else{
      const blog = await blogModal.findByIdAndUpdate(blogId, { title, content, author, userId }, { new: true });
      res.json({'message':'Blog updated successfully'});

        }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Getting error while updating the blogs' });
    }
  };


  // Delete blog by ID
const deleteBlog=async (req, res) => {
    const blogId = req.params.id;
    const result=await blogModal.findOne({"_id":blogId});
    const userId_in_blog=result.userId;
    const userId_making_req=req.body.userId
    try {
        if(userId_making_req!==userId_in_blog){
            res.json({'message':'You are not authorized'})
        }else{
      const blog = await blogModal.findByIdAndDelete(blogId);
      res.json({ message: 'Blog deleted successfully' });
        }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Getting error while deleting the blog' });
    }
  };
  


  module.exports={creatBlog,getAllBlog,getBlogById,updateBlogById,deleteBlog}
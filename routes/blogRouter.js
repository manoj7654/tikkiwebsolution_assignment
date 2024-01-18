const express=require("express");
const { creatBlog, getAllBlog, getBlogById, updateBlogById, deleteBlog } = require("../controller/blogController");
const { authentication } = require("../middleware/authentication");
const blogRouter=express.Router();



blogRouter.post("/create",authentication,creatBlog)
blogRouter.get("/getAllBlogs",authentication,getAllBlog)
blogRouter.get("/getBlogById/:id",authentication,getBlogById)
blogRouter.put("/update/:id",authentication,updateBlogById)
blogRouter.delete("/delete/:id",authentication,deleteBlog)



module.exports={blogRouter}
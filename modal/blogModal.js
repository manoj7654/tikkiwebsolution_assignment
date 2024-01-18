const mongoose=require("mongoose");


const blogSchema=mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
      },
      content: {
        type: String,
        required: true,
      },
      author: {
        type: String,
        required: true,
      },
    userId: { type:mongoose.Schema.Types.ObjectId, ref: "users" }

})



const blogModal=mongoose.model("blogs",blogSchema);



module.exports={blogModal}
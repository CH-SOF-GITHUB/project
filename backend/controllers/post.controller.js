const Post = require("../models/Post");
//GREATE POST
exports.create = async (req, res) => {
    const { author, title, description, postCategory, business } = req.body;
    const newPost = new Post({
        author,
        title,
        description,
        postCategory,
        business
    })
    try {
        await newPost.save();
        res.send(newPost);
    } catch (error) {
        console.log('Post request error' + error);
    }
}
//GET ALL POSTS
exports.getPosts = async (req, res) => {
    try {
        let posts = await Post.find()
        res.send(posts);
    } catch (error) {
        console.log("Get request error" + error)
    }
}
//GET POST BY ID
exports.getPost = async (req, res) => {
    try {
        res.send(await Post.findById({ _id: req.params.id }));
    } catch (error) {
        console.log("Get request by id error" + error)
    }
}
//UPDATE POST
exports.modifyPost = async (req, res) => {
    try {
        let editedPost = await Post.findByIdAndUpdate(req.params.id, { ...req.body }, { new: true })
        res.send("post updated successfully")
    } catch (error) {
        console.log("Update request error" + error)
    }
}
//DELETE POST 
exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id)
        res.send("Post successfully deleted")
    } catch (error) {
        console.log("Delete request error" + error)
    }
}
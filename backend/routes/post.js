const router = require("express").Router();
const { create, getPosts, getPost, modifyPost, deletePost } = require("../controllers/post.controller");
//CREATE POST
router.post('/add', create)
//GET POST
//GET USER 
router.get("/", getPosts);
//GET POST BY ID
router.get("/detail/:id", getPost);
//DELETE POST
router.delete("/delete/:id", deletePost);
//MODIFY POST
router.put("/update/:id", modifyPost);


module.exports = router;
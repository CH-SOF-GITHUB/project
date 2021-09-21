const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    author:String,
    title:String,
    description:String,
    postCategory:String,
    business:String
});

module.exports = mongoose.model("Post", PostSchema);
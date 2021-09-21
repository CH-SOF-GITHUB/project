const express = require("express");
const app = express();
const connectDB = require("./config/connection");
const PORT = process.env.PORT || 5000;

//connected dataBase 
connectDB()
/////// api.use()
app.use(express.json()); 

//routes api
app.use("/user", require("./routes/user"));
app.use("/posts", require("./routes/post"))

app.listen(PORT, (err) => err ? console.log(err) : console.log(`app is running on port ${PORT}`))

const router = require("express").Router();
const { register, login, getUser } = require("../controllers/user.controller");
const isAuth = require("../middlewares/isAuth");
const { registerRules, validator } = require("../middlewares/validaor");


//POST REGISTER REQUEST
router.post("/register", registerRules(), validator, register);

//POST LOGIN REQUEST
router.post("/login", login);
//GET USER 
router.get("/getuser", isAuth, getUser);

module.exports = router;
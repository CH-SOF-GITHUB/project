const { validationResult, check } = require("express-validator");

exports.registerRules = () => [
    check('fullName', 'this filed is required').notEmpty(),
    check('email', 'this filed is required').notEmpty(),
    check('email', 'this filed should be a valid email').isEmail(),
    check('password', 'this filed is required').isLength({ min: 6 })
]


exports.validator = (req, res, next) => {
    const erros = validationResult(req);
    erros.isEmpty() ? next() : res.status(400).json({ message: erros.array() })
}

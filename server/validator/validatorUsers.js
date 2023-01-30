const { check } = require("express-validator");
const validateResult = require('../utils/handleValidator')

const validatorRegister = [
  check("firstName")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 25 })
    .withMessage("Debes ingresar un nombre de usuario"),
  check("lastName")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 25 })
    .withMessage("Debes ingresar un nombre de usuario"),
  check("email")
    .exists()
    .notEmpty()
    .withMessage("Debes ingresar un correo electrónico"),
  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 3, max: 15 })
    .withMessage("Debes ingresar una contraseña"),
  (req, res, next) => {
    return validateResult(req, res, next);
  },
];

module.exports = validatorRegister;
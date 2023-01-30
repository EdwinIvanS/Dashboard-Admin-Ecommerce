const handleHtttpErrors = require("../utils/handleHtttpErrors");
const { encrypt, compare } = require("../utils/handlePassword");
const { matchedData, body } = require("express-validator");
const userSchema = require("../models/user");

const mainController = {
  create: async (req, res) => {
    try {
      const { firstName, lastName, email, password } = req.body;
      const validate = await userSchema.findOne({ email });
      
      if (validate === null) {
        const encrypta = await encrypt(req.body.password);
        const body = { firstName, lastName, email, password: encrypta };
        const createUser = await userSchema.create(body);

        res.send({ status: 200, createUser });

      } else { handleHtttpErrors.httpError(res, "EXIST_EMAIL_REGISTER", 403) }
    } catch (error) { handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500) }
  },

  allUsers: async (req, res) => {
    try {
      const queryAll = await userSchema.find();
      data = {
        status: 200,
        descripcion: "SUCCESSFUL_QUERY",
        users: queryAll,
      };
    } catch (error) {
      handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
  },
};

module.exports = mainController;

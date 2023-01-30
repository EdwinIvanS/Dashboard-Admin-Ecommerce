const handleHtttpErrors = require("../utils/handleHtttpErrors");
const { encrypt, compare } = require("../utils/handlePassword");
const { matchedData, body } = require("express-validator");
const userSchema = require("../models/user");

const mainController = {
  create: async (req, res) => {
    try {
      const data = req.body; 
      const register = await userSchema.create(...data, password);
      console.log(register)
      res.send({
        status: 200,
        body,
      });
    } catch (error) {
      handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
  },
  allUsers: async (req, res) => {
    try {
      const queryAll = await userSchema.find();
      console.log(queryAll);
    } catch (error) {
      
    }
  },
};

module.exports = mainController;

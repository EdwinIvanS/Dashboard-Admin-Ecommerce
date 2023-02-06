const handleHtttpErrors = require("../utils/handleHtttpErrors");
const { encrypt, compare, decrypt } = require("../utils/handlePassword");
const { matchedData, body } = require("express-validator");
const userSchema = require("../models/user");

const mainController = {
  create: async (req, res) => {
    console.log(req.body)
    try {
      const { firstName, lastName, email, password } = req.body;
      const validate = await userSchema.findOne({ email });

      if (validate === null) {
        console.log("aqui estoy 1 ")
        const encrypta = await encrypt(req.body.password);
        const body = { firstName, lastName, email, password: encrypta };
        const createUser = await userSchema.create(body);

        createUser.set("password", undefined, { strict: false });

        res.json({
          status: 200,
          descripcion: "CREATE_OK",
          createUser,
        });
        
      } else {
        console.log("aqui estoy 2 ");
        handleHtttpErrors.httpError(res, "EXIST_EMAIL_REGISTER", 403);
      }
    } catch (error) {
      console.log("aqui estoy 3 ");
      handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
  },

  allUsers: async (req, res) => {
    try {
      const queryAll = await userSchema.find();

      if (queryAll[0] === undefined) {
        handleHtttpErrors.httpError(res, "NOT_EXIST_INFOMATION_BD", 404);
      } else {
        
        data = {
          status: 200,
          descripcion: "SUCCESSFUL_QUERY",
          users: queryAll,
        };
        res.send(data);
      }
    } catch (error) {
      handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
  },

  delete : async (req, res) => {
    try {
      const userDelete = await userSchema.findByIdAndDelete(req.params.id)
      if (userDelete == null)
        return handleHtttpErrors.httpError(res, "NOT_EXIST_INFOMATION_BD", 404);
      
        data = {
          status: 200,
          descripcion: "SUCCESSFUL_DELETE",
          user : userDelete
        }

        res.send(data)

    } catch (error) {
      return handleHtttpErrors.httpError(res, "INTERNAL_SERVER_ERROR", 500);
    }
  }
};

module.exports = mainController;

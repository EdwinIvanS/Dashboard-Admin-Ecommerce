const handleHttpError = {
  httpError: (res, message, code) => {
    return res.status(code).json({ status: code, message: message });
  },
};
module.exports = handleHttpError;

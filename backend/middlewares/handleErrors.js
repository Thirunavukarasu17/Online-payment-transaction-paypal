const HandleErrors = (func) => async (req, res) => {
    try {
      console.log("Triggered", req && req.method, " ", req && req.originalUrl);
      func(req, res, next);
    } catch (error) {
      console.error("Error Handler", error);
      res.status(400).send(error);
    }
  };
  
  module.exports = HandleErrors;
  
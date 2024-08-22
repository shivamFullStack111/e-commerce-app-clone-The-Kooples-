const Users = require("../schemas/userSchema");

const jwt = require("jsonwebtoken");

exports.checkauthentication = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) {
      req.error = "authorization token required";
      next();
    }

    const { user } = await jwt.verify(authorization, process.env.SECRET_KEY);
    if (!user) {
      req.error = "invalid token";
      next();
    }

    const isexist = await Users.findOne({ email: user.email });
    if (!isexist) {
      req.error = "user not registered";
      next();
    }
    req.user = user;
    next();
  } catch (error) {
    console.log(error.message);
    req.error = error.message;
    next();
  }
};

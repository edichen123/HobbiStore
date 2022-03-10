const jwt = require("jsonwebtoken");

const verificationToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if (authHeader) {
    const token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
      if (error) res.status(403).json("Token is invalid!");
      req.user = user;
      next();
    });
  } else {
    return res.status(401).json("Not Authenticated!");
  }
};

const verifyAndAuthenticate = (req, res, next) => {
  verificationToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.admin) {
      next();
    } else {
      res.status(403).json("Invalid Request!");
    }
  });
};
const verifyAndAuthenticateAdmin = (req, res, next) => {
  verificationToken(req, res, () => {
    if (req.user.admin) {
      next();
    } else {
      res.status(403).json("Invalid Request!");
    }
  });
};

module.exports = {
  verificationToken,
  verifyAndAuthenticate,
  verifyAndAuthenticateAdmin,
};

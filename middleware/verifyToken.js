var jwt = require("jsonwebtoken");

exports.verifyToken = function (req, res, next) {
  var authHeader = req.headers["authorization"];
  var token = authHeader && authHeader.split(" ")[1];
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, function (err, decoded) {
    if (err) return res.sendStatus(403);
    req.email = decoded.email;
    next();
  });
};

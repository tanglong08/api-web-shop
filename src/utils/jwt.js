const jwt = require("jsonwebtoken");

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(401).json({ error: "Unauthorized" });

  jwt.verify(token, "CLIENT_SHOP", (err, user) => {
    if (err) return res.status(403).json({ error: "Token is not valid" });
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;

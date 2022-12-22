import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) {
    res.status(403).send({ message: "No token provided!" });
    return;
  }
  jwt.verify(token, process.env.JWT, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: "Unauthorized!" });
      return;
    }

    req.user = decoded;
    next();
  });
};

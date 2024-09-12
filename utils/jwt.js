const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_ACCESS_EXPIRATION });
};

const generateRefreshToken = (user) => {
  return jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_REFRESH_EXPIRATION });
};

module.exports = { generateAccessToken, generateRefreshToken };

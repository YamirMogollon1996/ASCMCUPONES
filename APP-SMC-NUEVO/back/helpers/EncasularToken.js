const { sign } = require("jsonwebtoken");
const Tokenata = async (data) => {
  return await sign(data, process.env.SECRET__KEY);
};

module.exports = Tokenata;

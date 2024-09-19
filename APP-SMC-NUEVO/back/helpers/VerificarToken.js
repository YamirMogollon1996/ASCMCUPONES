const { decode } = require("jsonwebtoken");
const VerifyToken = (req, res, next) => {
  const Bearer = req.headers["authorization"].split(" ")[1];
  if (!Bearer) return res.send({ msg: "error al enviar token" });
  if (Bearer) {
    req.token = Bearer;
    next();
  } else {
    return res.sendStatus(403).send({
      msg: "no estas authoraziado",
    });
  }
};

const verficarPerson = async (req, res, next) => {
  const token = req.token;
  try {
    let variable = await decode(token, process.env.SECRET__KEY);
    console.log(variable);
    if (variable.tipo_cliente === "persona") {
      next();
    } else {
      return res.send({
        msg: "no puedes pasar solo los adminisradores",
      });
    }
  } catch (error) {
    return res.send({
      error: error.message,
    });
  }
};

module.exports = { VerifyToken, verficarPerson };

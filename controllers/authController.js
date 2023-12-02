const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");

// Controlador para mostrar un mensaje de registro
const registerController = async (req, res) => {
  const { email, name, password } = req.body; //Se desestructura para que no se puedan registrar como admin
  checkEmail = await User.findOne({ email });
  if (checkEmail) {
    throw new CustomError.BadRequestError(
      "Please use an unregistered email, did you lose your password?"
    );
  }
  if (req.body.role) {
    throw new CustomError.BadRequestError("Trying to hack?");
  }
  const isFirstUser = (await User.countDocuments({})) === 0;
  const role = isFirstUser ? "admin" : "user";

  const user = await User.create({ email, name, password, role });
  res.status(StatusCodes.CREATED).json({ user });
};

// Controlador para mostrar un mensaje de inicio de sesión
const loginController = async (req, res) => {
  res.send("Mensaje de inicio de sesión");
};

// Controlador para mostrar un mensaje de cierre de sesión
const logoutController = async (req, res) => {
  res.send("Mensaje de cierre de sesión");
};

module.exports = {
  registerController,
  loginController,
  logoutController,
};

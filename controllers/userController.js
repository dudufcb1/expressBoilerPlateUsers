const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const CustomError = require("../errors");
const { createJwt, attachCookiesToResponse } = require("../utils");

// Controlador para obtener todos los usuarios
const getAllUsersController = async (req, res) => {
  const users = await User.find({ role: "user" }).select("-password");
  res.status(StatusCodes.OK).json(users);
};

// Controlador para obtener un solo usuario
const getSingleUserController = async (req, res) => {
  const user = await User.find({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json({ user });
};

// Controlador para mostrar el usuario actual
const showCurrentUserController = async (req, res) => {
  res.status(StatusCodes.OK).json({ user: req.user });
};

// Controlador para actualizar un usuario
const updateUserController = async (req, res) => {
  res.status(200).json({ message: "Actualizar usuario" });
};

// Controlador para actualizar la contraseña de un usuario
const updateUserPasswordController = async (req, res) => {
  const { oldPassword, newPassword } = req.body;
  if (!oldPassword || !newPassword) {
    throw new CustomError.BadRequestError("Please provide both values");
  }
  const user = await User.findOne({ _id: req.user.userId });
  const isPasswordCorrect = await await user.comparePassword(oldPassword);
  if (!isPasswordCorrect) {
    throw new CustomError.UnauthenticatedError("Invalid credentials");
  }
  user.password = newPassword;
  await user.save();
  res.status(StatusCodes.OK).json({ msg: "Sucess! Password Updated" });
};
module.exports = {
  getAllUsersController,
  getSingleUserController,
  showCurrentUserController,
  updateUserController,
  updateUserPasswordController,
};

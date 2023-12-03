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
  console.log(req.user.name);
  const user = await User.find({ _id: req.params.id }).select("-password");
  if (!user) {
    throw new CustomError.NotFoundError(`No user with id: ${req.params.id}`);
  }
  res.status(StatusCodes.OK).json(user);
};

// Controlador para mostrar el usuario actual
const showCurrentUserController = async (req, res) => {
  console.log(req.user.name);
  res.status(200).json({ message: "Mostrar el usuario actual" });
};

// Controlador para actualizar un usuario
const updateUserController = async (req, res) => {
  res.status(200).json({ message: "Actualizar usuario" });
};

// Controlador para actualizar la contraseña de un usuario
const updateUserPasswordController = async (req, res) => {
  res.status(200).json({ message: "Actualizar contraseña de usuario" });
};
module.exports = {
  getAllUsersController,
  getSingleUserController,
  showCurrentUserController,
  updateUserController,
  updateUserPasswordController,
};

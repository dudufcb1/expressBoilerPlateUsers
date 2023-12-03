// Controlador para obtener todos los usuarios
const getAllUsersController = async (req, res) => {
  res.status(200).json({ message: "Obtener todos los usuarios" });
};

// Controlador para obtener un solo usuario
const getSingleUserController = async (req, res) => {
  res.status(200).json({ message: "Obtener un solo usuario" });
};

// Controlador para mostrar el usuario actual
const showCurrentUserController = async (req, res) => {
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

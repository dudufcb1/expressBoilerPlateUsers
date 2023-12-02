
// Controlador para mostrar un mensaje de registro
const registerController = async (req, res) => {
    res.send('Mensaje de registro');
};

// Controlador para mostrar un mensaje de inicio de sesión
const loginController = async (req, res) => {
    res.send('Mensaje de inicio de sesión');
};

// Controlador para mostrar un mensaje de cierre de sesión
const logoutController = async (req, res) => {
    res.send('Mensaje de cierre de sesión');
};

module.exports = {
    registerController,
    loginController,
    logoutController
};

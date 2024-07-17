
const User = require("../models/user.model");

const userController = {
    userRegister: async (req, res) => {
        const { name, email, password } = req.body;
        let filename = req?.file?.filename;

        // Create a User instance
        let user = new User(name, email, filename, password);

        try {
            const userData = await User.registerUser(user);
            return res.status(200).json({
                userData
            });
        } catch (err) {
            return res.status(500).json({
                status: false,
                error: "Failed to register user"
            });
        }
    },
    userLogin: async (req, res) => {
        const { email, password } = req.body;
        try {
            let login_data = await User.loginUser(email, password);
            return res.status(200).json({
                login_data
            });

        } catch (err) {
            return res.status(500).json({
                status: false,
                error: "Failed to Login"
            });
        }

    }
};

module.exports = userController;

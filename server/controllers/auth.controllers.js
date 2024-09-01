
const User = require("../models/auth.model");

const userController = {
    userRegister: async (req, res) => {
        const { name, email, password } = req.body;
        let filename = req?.file?.filename;

        // Create a User instance
        let user = new User(name, email, filename, password);

        try {
            const data = await User.registerUser(user);
            return res.status(200).json({
                data
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
           let data = await User.loginUser(email, password, res);
            return res.status(200).json({
                data
            });

        } catch (err) {
            return res.status(500).json({
                status: false,
                error: "Failed to Login"
            });
        }

    },
    userLogout: async (req, res) => {
        res.clearCookie('loginToken');  
        return res.status(200).json({ status: true, message: "Logged out successfully" });
    }
};

module.exports = userController;

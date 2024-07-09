const { registerUsers } = require("../models/user.model");

const userController = {
    userRegister: (req, res) => {
        const { name, email, password } = req.body;

        // Validate file upload
        if (!req.file) {
            return res.status(400).json({
                status: false,
                error: "No file selected for profile photo"
            });
        }
        const { filename } = req.file;

        // Prepare user data array
        const userdata = [name, email, filename, password];

        // Call registerUsers function
        registerUsers(userdata, (err, result) => {
            if (err) {
                return res.status(500).json({
                    status: false,
                    error: "Failed to register user"
                });
            } else {
                return res.status(200).json({
                    status: true,
                    successMessage: "Successfully registered"
                });
            }
        });
    }
};

module.exports = userController;

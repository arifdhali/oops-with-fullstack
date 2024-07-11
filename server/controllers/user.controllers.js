const { registerUsers } = require("../models/user.model");

const userController = {
    userRegister: (req, res) => {
        const { name, email, password } = req.body;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        let error = {};
        const nameRegex = /^[a-zA-Z\s'-]{2,40}$/;
        if (!name.trim()) {
            return res.status(403).json({
                name: 'Name is required',
            })
        } else if (!nameRegex.test(name)) {
            return res.status(403).json({
                name: 'Name should not include special characters',
            })
        }
        // Validate email
        if (!email.trim()) {
            return res.status(403).json({
                error: {
                    email: 'Email is required',
                }
            });
        } else if (!emailRegex.test(email)) {
            return res.status(403).json({
                error: {
                    email: `Email is not valid. Don't use white space`,
                }
            });
        }


        // Check if file is uploaded
        let filename = null;
        if (req.file) {
            filename = req.file.filename;
        } else {
            console.log(req.file)
        }

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
                    message: result.message,
                    data: result.user || result.result
                });
            }
        });
    }
};

module.exports = userController;

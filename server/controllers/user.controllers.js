const { registerUsers } = require("../models/user.model")
const userController = {
    userRegister: (req, res) => {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return res.json({
                success: false,
                message: "This filed is required"
            })
        }
    }
}


module.exports = userController;
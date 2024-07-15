const Base_modal = require("../models/base.model");
const bcrypt = require("bcrypt");
const saltRounds = 10;

class User extends Base_modal {
    constructor(name, email, image, password) {
        super();
        (this.name = name),
            (this.email = email),
            (this.image = image),
            (this.password = password);
    }
    static async registerUser(user) {
        const { name, email, image, password } = user;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        console.log(hashedPassword);
        try {
            let emailExitquery = await this.querySql(
                "SELECT user_email FROM users WHERE user_email = ?",
                [email]
            );
            if (emailExitquery.length > 0) {
                return {
                    status: false,
                    message: "Email already exists",
                    result: emailExitquery,
                };
            } else {
                await this.querySql(
                    "INSERT INTO users (user_name,user_email,user_image,user_password) VALUES(?,?,?,?)",
                    [name, email, image, hashedPassword]
                );
                return {
                    status: true,
                    message: "User registered successfully",
                };
            }
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = User;

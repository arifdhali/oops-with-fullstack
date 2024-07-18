const Base_modal = require("../models/base.model");
const jwt = require("jsonwebtoken");
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
    // register user
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
    // login user
    static async loginUser(email, password) {
        try {
            let emailExists = await this.querySql('SELECT * FROM users WHERE user_email = ?', [email]);

            if (emailExists.length < 1) {
                return {
                    status: false,
                    message: "User not found",
                };
            } else {
                const user = emailExists[0];
                const comparePass = await bcrypt.compare(password, user.user_password);

                if (!comparePass) {
                    return {
                        status: false,
                        message: "Incorrect password",
                    };
                }
                const token = jwt.sign({
                    username: user.user_name,
                    username: user.user_image,
                }, 'secretkey', {
                    expiresIn: '1h'
                })

                return {
                    status: true,
                    message: "User logged in successfully",
                    token: token,
                };
            }
        } catch (err) {
            throw new Error(err);
        }
    }
}

module.exports = User;

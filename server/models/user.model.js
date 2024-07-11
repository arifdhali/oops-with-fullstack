// user.model.js

const { connection } = require("../config/config");


const userModels = {
    registerUsers: (userdata, cb) => {
        const [name, email, image, password] = userdata;

        // Check if the email exists or not
        let selectEmail = `SELECT user_email FROM users WHERE user_email = ?`;
        connection.query(selectEmail, [email], (err, result) => {
            if (err) {
                return cb(err, null);
            }
            if (result.length > 0) {
                // console.log('Email exists:', result);
                return cb(null, { message: 'Email already exists', user: result });
            } else {
                let insertQuery = 'INSERT INTO users (user_name, user_email, user_image, user_password) VALUES (?, ?, ?, ?)';
                connection.query(insertQuery, [name, email, image, password], (err, result) => {
                    if (err) {
                        return cb(err, null);
                    } else {
                        return cb(null, { message: 'User registered successfully', result });
                    }
                });
            }
        });
    }
};

module.exports = userModels;

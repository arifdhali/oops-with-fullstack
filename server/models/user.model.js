// user.model.js

const { connection } = require("../config/config");



const userModels = {
    registerUsers: (userdata, cb) => {
        let insertQuery = 'INSERT INTO users (user_name, user_email,user_image, user_password) VALUES (?, ?,?, ?)';

        connection.query(insertQuery, userdata, (err, result) => {
            if (err) {
                return cb(err, null);
            } else {
                return cb(null, result);
            }
        });
    }
};

module.exports = userModels;

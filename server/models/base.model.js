// It is handeling for all users models 
// I use this for DRY Don't Repeate Yourself
const { connection } = require("../config/config");
class Base_modal {

    static querySql(sql, params) {
        return new Promise((resolve, reject) => {
            connection.query(sql, params, (err, result) => {
                if (err) {
                    return reject(err);
                } else {
                   return resolve(result);
                }
            });
        })
    }

}

module.exports = Base_modal;
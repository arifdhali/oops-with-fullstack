const jwt = require("jsonwebtoken");

const authenticatedUser = (req, res, next) => {
    const { loginToken } = req.cookies;                
    if (!loginToken) {
        return res.json({
            status: false,
            message: 'Not valid login token'
        });        
    } else {
        let decode = jwt.verify(loginToken, 'secretkey');
        req.user = decode.user;
        next();
    }
}
module.exports = authenticatedUser;
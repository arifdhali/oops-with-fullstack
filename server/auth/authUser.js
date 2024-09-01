const jwt = require("jsonwebtoken");

const authenticatedUser = (req, res, next) => {
    const { loginToken } = req.cookies;
    if (!loginToken) {
        return res.json({
            status: false,
            message: 'No valid login token provided',
        });
    }

    try {
        let decode = jwt.verify(loginToken, 'secretkey');
        req.user = decode.user;
        next();
    }
    catch (err) {
        console.log(err.name);
        if (err.name === 'TokenExpiredError') {
            return res.status(401).json({
                status: false,
                message: 'Session expired, please log in again',
            });
        } else {
            return res.status(401).json({
                status: false,
                message: 'Invalid token, please log in again',
            })

        }
    }

}
module.exports = authenticatedUser;
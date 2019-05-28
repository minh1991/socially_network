const Jwt = require('jsonwebtoken')
const dbConfig = require('../config/keys')
const HttpStatus = require('http-status-codes')
const messenger = require('../supports/messengers')

module.exports = {
    VerifiToken: (req, res, next) => {
        if (!req.headers.authorization) {
            return res.status(HttpStatus.UNAUTHORIZED).json({ messenger: messenger.MSG0008 })
        }
        // console.log('headers', req.headers);
        const token = req.cookies.myToken || req.headers.authorization.split(' ')[1]
        // console.log('req', req);
        // console.log('token--', token)
        if (!token) {
            return res.status(HttpStatus.FORBIDDEN).json({ messenger: messenger.MSG0006 })
        } else {
            return Jwt.verify(token, dbConfig.secret, (err, decoded) => {
                if (err) {
                    if (err.expiredAt < new Date()) {
                        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                            messenger: messenger.MSG0007,
                            myToken: null
                        })
                    }
                    next()
                }
                // console.log('decoded--', decoded);
                req.user = decoded.data
                next()
            })
        }

    }
}
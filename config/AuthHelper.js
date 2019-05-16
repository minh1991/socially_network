const Jwt = require('jsonwebtoken')
const dbConfig = require('../config/keys')
const HttpStatus = require('http-status-codes')
const messenger = require('../supports/messengers')

module.exports = {
    VerifiToken: (req, res, next) => {
        const token = req.cookies.myToken
        if (!token) {
            return res.status(HttpStatus.FORBIDDEN).json({ messenger: messenger.MSG0006 })
        }
        return Jwt.verify(token, dbConfig.secret, (err, doc) => {
            if (err) {
                if (err.expiredAt < new Date()) {
                    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                        messenger: messenger.MSG0007,
                        myToken: null
                    })
                }
                next()
            }
            req.user = decoded.data
            next()
        })
    }
}
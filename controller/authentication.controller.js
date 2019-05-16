const Joi = require('joi')
const HttpStatus = require('http-status-codes')
const User = require('../models/user.model')
const Support = require('../supports/support')
const messenger = require('../supports/messengers')
const format = require('string-format')
const bcrypt = require('bcryptjs')
const Jwt = require('jsonwebtoken')
const dbConfig = require('../config/keys')

module.exports = {
  // SIGN UP
  async CreateUser(req, res) {
    // console.log(req.body);
    const schema = Joi.object().keys({
      username: Joi.string()
        .alphanum()
        .min(2)
        .max(30)
        .required(),
      email: Joi.string()
        .email()
        .required(),
      password: Joi.string()
        .min(5)
        .max(30)
        .regex(/^[a-zA-Z0-9]{3,30}$/)
        .required()
    });
    const { error, value } = Joi.validate(req.body, schema);
    console.log(value)
    if (error && error.details) {
      return res.status(HttpStatus.BAD_GATEWAY).json({ msg: error.details })
    }

    //KIỂM TRA MAIL ĐÃ TỒN TẠI
    const emaiUser = await User.findOne({ email: Support.toLowerCase(req.body.email) })
    if (emaiUser) {
      return res.status(HttpStatus.CONFLICT).json({ message: format(messenger.MSG0001, 'Email') })
    }

    //KIỂM TRA USERNAME ĐÃ TỒN TẠI
    const nameUser = await User.findOne({ username: Support.firstUpper(req.body.username) })
    if (nameUser) {
      return res.status(HttpStatus.CONFLICT).json({ message: format(messenger.MSG0001, 'Username') })
    }

    // BCRYPT HASH PASS -- CREATE DB
    return bcrypt.hash(value.password, 10, (err, hash) => {
      if (err) {
        return res.status(HttpStatus.BAD_REQUEST).json({ message: format(messenger.MSG0000, 'password') })
      }
      const dataUser = {
        username: Support.firstUpper(value.username),
        email: Support.toLowerCase(value.email),
        password: hash
      }

      // CREATE DB
      User.create(dataUser)
        .then(user => {
          const token = Jwt.sign({ data: user }, dbConfig.secret, {
            expiresIn: '2 days'
          })
          res.cookie('myToken', token)
          res.status(HttpStatus.CREATED).json({ message: format(messenger.MSG0002, 'Đăng ký'), user, token })
        })
        .catch(err => {
          res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'Đăng ký') })
          console.log(err)
        });
    });
  },

  // LOGIN
  async LoginUser(req, res) {
    if (!req.body.email) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: format(messenger.MSG0003, 'Email') })
    }
    if (!req.body.password) {
      return res.status(HttpStatus.NOT_FOUND).json({ message: format(messenger.MSG0003, 'Password') })
    }
    await User.findOne({ email: Support.toLowerCase(req.body.email) })
      .then(user => {
        if (!user) {
          return res.status(HttpStatus.NOT_FOUND).json({ message: format(messenger.MSG0004, 'Email') })
        } else {
          return bcrypt.compare(req.body.password, user.password).then(result => {
            if (!result) {
              return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0005, 'Password') })
            } else {
              const token = Jwt.sign({ data: user }, dbConfig.secret, {
                expiresIn: '2 days'
              });
              res.cookie('myToken', token);
              res.status(HttpStatus.OK).json({ message: format(messenger.MSG0002, 'Đăng nhập'), user, token })
            }
          })
        }
      })
      .catch(err => {
        return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({ message: format(messenger.MSG0000, 'Login') })
      })
  }
}

const Joi = require('joi');

const validate = (schema) => {
    try {
        return (req, res, next) => {
            //  if (req.file) {
            //      req.body.profile = req.file.destination + '/' + req.file.filename     
            //  }
            const { error, value } = schema.validate(req.body)

            if (error) {
                return res.json({
                    msg : "validaton errror",
                    error: error
                })
            }
            req.body = value
            next()
        }
    } catch (error) {
        return res.json({
            msg : "validaton faild",
            error: error
        })
    }
}

module.exports = validate
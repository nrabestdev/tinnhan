const accountModel = require("../models/account.model")

module.exports = {
    register: async (req, res) => {
        const body = req.body //
        const newAccount = await accountModel.create(body);
        return res.status(201).json(newAccount)
    },
    login: async (req, res)=> {
        const body = req.body; //userame, password 
        const account = await accountModel.findOne({
            username: body.username,
            password: body.password
        })
        if (!account){
            return res.status(404).json({
                statusCode: 404,
                message: 'tài khoản hoặc mật khẩu không đúng'
            })
        }

        return res.status(200).json(account)
    }

}
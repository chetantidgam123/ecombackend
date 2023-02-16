const jwt = require("jsonwebtoken")
require("dotenv").config()
const { PurchaseItemmodel } = require("../model/purchaseProducts.model");
const token_secret = process.env.TOKEN_KEY;

const addPurchaseItem = async (req, res) => {
    try {
        const { purchesItem } = req.body
        let Bearer = req.headers["authorization"]
        let splittoken = Bearer.split(" ")
        let token = splittoken[1].replace('"', '');
        var decode = jwt.verify(token, token_secret)
        if (decode) {
            let purchasedItem = await PurchaseItemmodel.create({
                user: decode,
                purchesItem: purchesItem
            })
            return res.send({
                code: 200,
                purchasedItem
            })

        }
    }
    catch (err) {
        res.send({
            code: 404,
            message: "Invalid Token",
            err
        })
    }
}





const getList = async (req, res) => {
    let data = await PurchaseItemmodel.find()
    return res.send({
        data
    })
}
module.exports = {
    getList,
    addPurchaseItem
}
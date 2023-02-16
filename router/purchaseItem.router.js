const express = require("express");
const { getList, addPurchaseItem } = require("../controller/purchaseItem.controller");
let purchaseItemRouter = express.Router();

purchaseItemRouter.get("/admin/getPurchaseList", getList)
purchaseItemRouter.post("/admin/addPurchaseItem", addPurchaseItem)
module.exports = purchaseItemRouter
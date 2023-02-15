const express = require("express");
const { getProductById, getProds, addProduct, updateProd, removeProduct } = require("../controller/product.controller");
let productRouter = express.Router();

productRouter.post("/admin/addProd", addProduct)
productRouter.get("/admin/removeprod/:id", removeProduct)
productRouter.put("/admin/updateProd/:id", updateProd)
productRouter.get("/product/:id", getProductById)
productRouter.get("/products", getProds)

module.exports = productRouter
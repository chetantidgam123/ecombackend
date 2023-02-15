const express = require("express");
const { getProductById, getProds, addProduct, updateProd } = require("../controller/product.controller");
let productRouter = express.Router();

productRouter.post("/admin/addProd", addProduct)
productRouter.put("/admin/updateProd/:id", updateProd)
productRouter.get("/product/:id", getProductById)
productRouter.get("/products", getProds)

module.exports = productRouter
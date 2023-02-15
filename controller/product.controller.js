const { ProductModel } = require("../model/product.model")
const token_secret = process.env.TOKEN_KEY;





const addProduct = async (req, res) => {
   try {
      const { title, price, category, image, description } = req.body
      let exixting_prod = await ProductModel.findOne({ title: title })
      if (exixting_prod) {
         return res.status(404).send({
            code: 404,
            message: "Similar Product Found Add Other Product"
         })
      }
      let product = await ProductModel.create({ title: title, price: price, category: category, image: image, description: description });
      if (product) {
         return res.send({
            code: 200,
            data: product,
            status: true,
            message: "Product Added succefully"
         })
      } else {
         return res.send({
            code: 404,
            status: false,
            message: "Invalid details"
         })
      }
   } catch (error) {
      return res.send({
         code: 404,
         status: false,
         message: error
      })
   }
}

const updateProd = async (req, res) => {
   try {
      const { id } = req.params
      const { title, price, category, image, description } = req.body
      let existing_prod = await ProductModel.findOneAndUpdate({ _id: id },
         {
            '$set': {
               "title": title,
               "price": price,
               "category": category,
               "image": image,
               "description": description
            },
         },
         { new: true }
      );

      if (existing_prod) {
         return res.send({
            code: 200,
            data: existing_prod,
            status: true,
            message: "Product Updated succefully"
         })
      } else {
         return res.send({
            code: 404,
            status: false,
            message: "Invalid details"
         })
      }
   } catch (error) {
      return res.send({
         code: 404,
         status: false,
         message: error
      })
   }
}

const getProductById = async (req, res) => {
   let { id } = req.params;
   let product = await ProductModel.findOne({ _id: id });
   if (product) {
      return res.send({
         data: product,
         message: ""
      })
   } else {
      return res.status(404).send({
         message: "Data not found"
      })
   }
}
const removeProduct = async (req, res) => {
   try {
      const { id } = req.params;
      let deletedItem = await ProductModel.findOneAndDelete({ _id: id }, { new: true })
      if (!deletedItem) {
         return res.status(404).send({
            code: 404,
            message: "Item Not found"
         })
      }
      return res.send({
         code: 200,
         message: "Item Removed Succesfully"
      })
   } catch (error) {
      return res.status(500).send({
         code: 500,
         message: error.error
      })
   }
}
const getProds = async (req, res) => {
   let products = await ProductModel.find()
   return res.send(products)
}

module.exports = {
   getProds,
   addProduct,
   getProductById,
   updateProd,
   removeProduct
}
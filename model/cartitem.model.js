const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
    userId:{type:mongoose.Schema.Types.ObjectId,ref:"users"},
    cartItem:[
        {cartId:{type:mongoose.Schema.Types.ObjectId,ref:"products"},
        title:{type:String,required:true},
        category:{type:String,required:true},
        image:{type:String,required:true},
        price:{type:Number,required:true},
        Qty:{type:Number}
    }
    ]
},{
    timestamps:true  
})

const CartItemmodel = mongoose.model('cartitem',cartItemSchema);
module.exports = {CartItemmodel}
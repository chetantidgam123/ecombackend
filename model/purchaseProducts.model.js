const mongoose = require('mongoose')

const purchaseItemSchema = new mongoose.Schema({
    user: {},
    purchesItem: []
}, {
    timestamps: true
})

const PurchaseItemmodel = mongoose.model('purchaseitem', purchaseItemSchema);
module.exports = { PurchaseItemmodel }
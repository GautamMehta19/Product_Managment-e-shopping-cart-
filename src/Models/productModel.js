const mongoose = require("mongoose")
const productSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
        unique: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    },

    currencyId: {
        type: String,
        required: true //INR
    },

    currencyFormat: {
        type: String,
        required: true,
    },

    isFreeShipping: {
        type: Boolean,
        default: false
    },

    productImage: {
        type: String,
        required: true
    },  // s3 link

    style: {
        type: String
    },

    availableSizes: {
        type: String,
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"]
    },

    installments: {
        type: Number
    },

    deletedAt: {
        type: Date
    },

    isDeleted: {
        type: Boolean,
        default: false
    }
},{ timestimes: true })

module.exports= mongoose.model("product", productSchema ) 
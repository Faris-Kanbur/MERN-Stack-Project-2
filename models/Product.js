const mongoose = require('mongoose');
const {Schema} = mongoose;

const schema = new Schema({
    productName:{
        type: String,
        required:true,
    },
    description: {
        type: String,
    },
    imagePath: {
        type: String,
        default: 'https://image.shutterstock.com/image-vector/no-user-profile-picture-hand-260nw-99335579.jpg',
    },
    quantity: {
        type: Number,
        default: 0,
    },
    unitPrice: {
        type: Number,
        default: 0,
    },
    categoryId:{
        type: String,
    },
    status:{
        type: String,
        default: 'created',
    },
    createdDate:{
        type: Date,
        default:Date.now,
    },
    updateddDate:{
        type: Date,
    },
    deletedDate:{
        type: Date,
    },

});


module.exports = Product = mongoose.model('Product', schema);
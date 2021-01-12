const mongoose = require("mongoose");
const {Schema} = mongoose;

const schema = new Schema({
    categoryName: {
        type: String,
        required:true
    },
    status:{
        type: String,
        default: 'created',
    },
    description: {
        type: String,
    },
    // createdDate: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedDate: {
    //     type: Date,
    // }
    deletedAt : {
        type: Date,
    },
    products:[{ type: Schema.Type.ObjectId, ref: 'Product'}]
}, {timestamps:true, collection: 'Categories'}); // create date and update date otomatik olusturulur timestamps ile

module.exports = Category = mongoose.model('Category', schema);
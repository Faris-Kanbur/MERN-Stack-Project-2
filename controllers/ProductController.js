const { validationResult } = require('express-validator');
const Product = require('../models/Product');
const (validationResult) = require('express-validator');
const checkError = require('../helper/checkError');

exports.addProduct = async (req, res) => {

    try {
        const {productName} = req.body

        // field validation
        const validation = validationResult(req);
        checkError(res, validationErr?.errors?.length > 0, validationErr.array());

        //product exist check
        const existProduct = await Product.findOne({ productName: productName});
        checkError(res, existProduct, 'Product already exist');

        //save Product
        const product = new Product(req.body);
        const addedProduct = await product.save({ new: true});
        res.status(200).json(addedProduct);


    } catch (err) {
        checkError(res, err, err.message);
        
    }

}

exports.getProduct = async (req, res) => {
    
}

exports.updateProduct = async (req, res) => {
    
}

exports.deleteProduct = async (req, res) => {
    
}

exports.getProduct = async (req, res) => {
    
}
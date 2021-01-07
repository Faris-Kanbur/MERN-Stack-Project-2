const express = require('express');
const router = express.Router();
const CategoryController = require('../controllers/CategoryController');
const validation = require('../middleware/validationMiddleware');


router.post("/addCategory",validation.categoryValidation, CategoryController.addController);

router.get("/getCategory/:id", CategoryController.getCategory);

router.post("/updateCategory",validation.categoryValidation, CategoryController.updateCategory);

router.get("/deleteCategory/:id", CategoryController.deleteController);

router.get("/", CategoryController.getController);

module.exports= router;

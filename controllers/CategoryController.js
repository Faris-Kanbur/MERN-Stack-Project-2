   const Category = require('../models/Category');
   const { validationResult, body } = require('express-validator');

   exports.addCategory = async (req, res) => {

        try {
       const { categoryName, description } = req.body;

       //field validation
       const validationErr = validationResult(req);
       if (validationErr?.errors?.length > 0) {
           return res.status(400).json({errors: validationErr.array()});
       }

       // category exist check
       const existCategory = await Category.findOne({ categoryName: categoryName });
       if(existCategory) {
           return res.status(400).json({errors: [{message : "Category already exist"}]})
       }

       // save category
       const category = new Category({
           categoryName: categoryName,
           description:description
       })

       // const category = new Category(req.bod)
        // ==>> birinci yol <<==
        // await category.save(); 
        // res.status(200).send('Category added');

        // ==>> birinci yol <<==
        const addedCategory = await category.save({new:true});
        res.status(200).json(addedCategory);
    }
    catch(err) {
       return res.status(500).json({ errors: [{ message: err.message}] });
    }
        
   }





   exports.getCategory = async (req, res) => {
        try {
            const category = await Category.findById({_id: req.params.id})
            res.status(200).json(category)

        } catch (error) {
            return res.status(500).json({errors: [{ message: error.message}]})
        }
   }




   exports.updateCategory = async (req, res) => {
       try {

        // validation
           const validationErr = validationResult(req);
           if(validationErr?.errors?.length > 0) {
               return res.status(400).json({ errors: validationErr.array() });
           }


        // update
           const updatedCategory = await Category.findOneAndUpdate(
               {_id: req.body.id},
               {
                   // categoryName: req.body.categoryName,
                   // description: req.body.description
                   ...req.body,
                   status: 'updated',
                   updateDate: Date.now(),
               },
               {
                   new: true,
                   runValidators: true
               }
           );
            // res.status(200).send('Category Updated')
            res.status(200).json(updatedCategory);

       } catch (error) {
           return res.status(500).json({errors: [{message: err.message}]});
       }

   }



   exports.deleteCategory = async (req, res) => {

    try {
        const deletedCategory = await Category.findOneAndUpdate(
            {_id: req.params.id},
            {
                status: 'deleted',
                deletedDate: Date.now(),
            },
            {
                new: true,
            }
        );
        res.status(200).json(deletedCategory);
        res.status(200).send('Category Deleted');

    } catch (error) {
        return res.status(500).json({message: [{messsage: error.message}]});
    }
   }

   exports.getCategories = async (req, res) => {

   }

  
let product = require('../models/products');

//to add new product 
module.exports.add = async function(req, res,next){
    
    try {
    let newProduct = new product(req.body);//takes the http request's body as argument to create new product object
    let result = await product.create(newProduct);
    console.log(result);
    //sends json response to client
    res.json(
        {
            success: true,
            message: "Product added successfully."
        }
    );

        
    } catch (error) {
        //if while creating new product error is encountered
        res.send(error);
        next(error);
    }

}



module.exports.list = async function(req, res,next){
    
    try {
        let list = await product.find({}, '-password');

        res.json(list);
    } catch (error) {
        console.log(error);
        next(error);
    }
}

module.exports.productByID = async function (req, res, next) {
    
    try {
        
        productItem  = await product.findOne({_id : req.params.productID},  '-password');

        res.send(productItem);
        // res.send("here");
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}


module.exports.update = async function (req, res, next) {
    try {
        console.log("in update controller");
        
        result  = await product.updateOne({_id : req.params.productID},  product(req.body));
        console.log(result);
        if (result.modifiedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "User updated successfully."
                }
            );
        }
        else {
            // Express will catch this on its own.
            throw new Error('User not updated. Are you sure it exists?')
        }
        res.send(productItem);
        // res.send("here");
        next();
    } catch (error) {
        console.log(error);
        next(error);
    }
}
module.exports.remove = async (req, res, next) => {
    try {
       

        let result = await product.deleteOne({ _id: req.params.productID });

        console.log(result);
        if (result.deletedCount > 0) {
            res.json(
                {
                    success: true,
                    message: "Product deleted successfully."
                }
            );
        }
        else {
            // Express will catch this on its own.
            throw new Error('Product not deleted. Are you sure it exists?')
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}
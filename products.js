var express = require('express');
var router = express.Router();

let productsController = require('../controllers/products');

console.log("here in router");
//set routes 
router.get('/list', productsController.list);
router.get('/add', productsController.add);
router.get('/get/:productID', productsController.productByID);
router.get('/edit/:productID', productsController.update);
router.get('/delete/:productID', productsController.remove);

module.exports = router;
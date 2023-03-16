//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
const express = require('express');
const { getProducts, createProducts } = require('../controllers/productController');

const router = express.Router()

router.get("/", getProducts)
router.post("/", createProducts)

module.exports = router
//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
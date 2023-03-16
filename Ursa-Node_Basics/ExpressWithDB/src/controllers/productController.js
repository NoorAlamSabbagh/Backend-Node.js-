//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
const ProductModel = require('../models/productModel')

const getProducts = (req, res)=>{
    ProductModel.find()
    .then((data)=>{
        res.send()
    })
}
const createProducts = (req, res)=>{
ProductModel.create(req.body)
.then((data)=>{
    console.log('data', data)
    res.send("product created successfully")
})
.catch((err)=>{
res.send(err)
})
}

module.exports = {getProducts, createProducts}

//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
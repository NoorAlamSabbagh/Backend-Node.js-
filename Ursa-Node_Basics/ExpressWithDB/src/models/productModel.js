//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
/*
const {Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10,
        minLength: [4, 'please pass a valid name for product'],
        trim: true,
        uppercase: true,
        // lowercase: true
    },
    category: {
        type: String,
        enum: ["mobile", "clothing", "appliances"]
    },
    price: {
    type: Number,
    required: true,
    cast: false,
    min: 10000,
    max: 70000
    },
    inStock: Boolean
},{versionKey: false})

const Product = model('product', productSchema)

module.exports = Product

*/

//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>








//<=======================Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
const {Schema, model } = require('mongoose');

const productSchema = new Schema({
    name: {
        type: String,
        required: true,
        maxLength: 10,
        minLength: [4, 'please pass a valid name for product'],
        trim: true,
        uppercase: true,
        // lowercase: true
    },
    category: {
        type: String,
        enum: ["mobile", "clothing", "appliances"]
    },
    price: {
    type: Number,
    required: true,
    cast: false,
    min: 100,
    max: 100000
    },
    //Lec 21 ka code yaha se start hua 
    color: {
        type: Array,
        //  validate: (data) => {
        //     console.log('data in validator', data);
        //     return data.length > 0
        // }


        //
        validate: {
            // validator: (data) => {
            //     console.log('data in validator', data);
            //     return data.length > 1
            // },
            // // message: `colors should be having more than 1 value`
            // message: (dataInMesg) => {
            //     console.log('dataInMesg', dataInMesg);
            //     return `validation failed for colors`
            // }

             // isAsync: true, --> deprecated
             validator: async (data) => {
                // return Promise.resolve('data')
                // return Promise.reject('data is not valid')
                // return await Promise.reject('data is not valid');
                // return await Promise.resolve(false);

                return new Promise((res, rej) => {
                    // res('123')
                    rej('error')
                })
                .then((data) => {

                })
                .catch((err) => {
                    return false
                })
            },
        }
    },
    inStock: Boolean
}, {versionKey: false})

const Product = model('product', productSchema)

module.exports = Product



//<===============End of Lec21March16:Mongoose Modelling, custom valodators, Async Validators, Validation errors=============>
//<======================Lec17March10-Introducing MVC Architecture=================================>
/*
const getUserList = (req, res) =>{
  res.send('User List')
}

module.exports = { getUserList}
*/

//<======================END: Lec17March10-Introducing MVC Architecture=================================>


//<======================Lec18March12-Better Folder Structure=================================>
/*const UserModel = require("../models/userModel")
const getUserList = (req, res)=>{
    // res.send('user List')
    //sara data show ho gaya postman pe list of data
    UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
    // always return you a list
    UserModel.find({password: '99999'})
    .then((data) => {
      res.send(data)
    })
  };

const createUser = (req, res) => {
    // get the data coming from client
    console.log("user data", req.body);
    UserModel.create(req.body)
      .then((data) => {
        console.log("data", data);
        res.send(data);
      })
      .catch((err) => {
        res.send(err);
      });
    // we have to create a user using this data in our DB
    // res.send("creating user")
  };

const getUserAddress = (req, res)=>{
    res.send('address of user')
}

const getUserOrders = (req, res)=>{
    res.send('user orders')
}

module.exports = {getUserList, createUser, getUserAddress, getUserOrders, getUser};
*/
//<======================End: Lec18March12=================================>





//<======================Lec19March14-Updating a document -update first Scale your Ecommerce data=================================>
/*
const UserModel = require("../models/userModel")
const getUserList = (req, res)=>{
    // res.send('user List')
    //sara data show ho gaya postman pe list of data
    UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
  //<===============================Lec19 ka code yaha se start hua===============================>
    // always return you a list
    // console.log('query params', req.query)
    // UserModel.find({password: '12345', age:25})
    // UserModel.find({age: Number(req.query.age)})
    // .then((data) => {
    //   res.send(data)
    // })

    //json array
    // UserModel.find({email:'student4@gmail.com'})
    // .then((data) => {
    //   res.send(data)
    // })


    //return the first match (json object)
    // UserModel.findOne({age:25, name: 'student6'})
    // .then((data) => {
    //   res.send(data)
    // })

  //
  // UserModel.findById('640f7cd270c50ead2bee03bc')
  // .then((data) => {
  //     res.send(data)
  // })

  //
  // // UserModel.find().select({name:0})
  // // UserModel.find().select({name:1,email:1})
  // // UserModel.find().select(['-name'])
  // // UserModel.find().select('name')
  // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  //
  // UserModel
  // .find({age: 25})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // >, <, >=, <=, !=, =, filter based on multiple values

  // UserModel
  // .find({age: {$gte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$lte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // UserModel
  // .find({age: {$in: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$nin: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$ne: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // and, or, nor, nand

  // UserModel
  // .find({$and: [{age: 25}, {name: 'student6'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$or: [{age: 25}, {name: 'student1'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'student1'}]})
  // .countDocuments()
  // // UserModel.find().select({email:1})
  // .then((number) => {
  //   res.send({count: number})
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'student1'}]})
  // .select({name:1, age:1})
  // .limit(5)
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  UserModel.find({ $nor: [{ age: 25 }, { name: "Student1" }] })
    .select({ name: 1, age: 1 })
    .skip(3)
    // UserModel.find().select({email:1})
    .then((data) => {
      res.send(data);
    });
};


const createUser = (req, res) => {
    // get the data coming from client
    // console.log("user data", req.body);
    //create for single array
    // UserModel.create(req.body)
    //   .then((data) => {
    //     console.log("data", data);
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });

    //create for multiple user at once
    // UserModel.insertMany(req.body)
    //   .then((data) => {
    //     console.log("data", data);
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
    // we have to create a user using this data in our DB
    // res.send("creating user")
  };

const getUserAddress = (req, res)=>{
    res.send('address of user')
}

const getUserOrders = (req, res)=>{
    res.send('user orders')
}

const updateUser = (req, res) => {
  console.log("params", req.params);

  // UserModel.findByIdAndUpdate(
  //   req.params.id,
  //   { $set: req.body },
  //   { new: true } // used for getting updated data
  // ).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  // UserModel.updateOne({ email: req.params.email }, req.body, {
  //   upsert: true, // it will create the data if not found
  // }).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  UserModel.updateMany({ password: "12345" }, req.body).then((data) => {
    console.log(data);
    res.send(data);
  });
};
module.exports = {getUserList, createUser, getUserAddress, getUserOrders, getUser, updateUser,};
*/

//<======================End: Lec19March14=================================>



//<=======================Lec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
/*
const UserModel = require("../models/userModel")
const getUserList = (req, res)=>{
    // res.send('user List')
    //sara data show ho gaya postman pe list of data
    UserModel.find()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.send(err);
    });
};

const getUser = (req, res) => {
  //<===============================Lec19 ka code yaha se start hua===============================>
    // always return you a list
    // console.log('query params', req.query)
    // UserModel.find({password: '12345', age:25})
    // UserModel.find({age: Number(req.query.age)})
    // .then((data) => {
    //   res.send(data)
    // })

    //json array
    // UserModel.find({email:'student4@gmail.com'})
    // .then((data) => {
    //   res.send(data)
    // })


    //return the first match (json object)
    // UserModel.findOne({age:25, name: 'student6'})
    // .then((data) => {
    //   res.send(data)
    // })

  //
  // UserModel.findById('640f7cd270c50ead2bee03bc')
  // .then((data) => {
  //     res.send(data)
  // })

  //
  // // UserModel.find().select({name:0})
  // // UserModel.find().select({name:1,email:1})
  // // UserModel.find().select(['-name'])
  // // UserModel.find().select('name')
  // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  //
  // UserModel
  // .find({age: 25})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // >, <, >=, <=, !=, =, filter based on multiple values

  // UserModel
  // .find({age: {$gte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$lte: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // UserModel
  // .find({age: {$in: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$nin: [25, 18]}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({age: {$ne: 25}})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })


  // and, or, nor, nand

  // UserModel
  // .find({$and: [{age: 25}, {name: 'student6'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$or: [{age: 25}, {name: 'student1'}]})
  // .select({name:1, age:1})
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'student1'}]})
  // .countDocuments()
  // // UserModel.find().select({email:1})
  // .then((number) => {
  //   res.send({count: number})
  // })

  // UserModel
  // .find({$nor: [{age: 25}, {name: 'student1'}]})
  // .select({name:1, age:1})
  // .limit(5)
  // // UserModel.find().select({email:1})
  // .then((data) => {
  //   res.send(data)
  // })

  // UserModel.find({ $nor: [{ age: 25 }, { name: "Student1" }] })
  //   .select({ name: 1, age: 1 })
  //   .skip(3)
  //   // UserModel.find().select({email:1})
  //   .then((data) => {
  //     res.send(data);
  //   });

  //
  //lec20
  //  UserModel.find({email: {$regex: /^s/, $options: "i"}}) //start with ^ and s$ end with
  //  UserModel.find({email: {$regex: /@gmail$/, $options: "i"}})
  // .then((data) => {
  //   res.send(data)
  // })

  //
  // pagination
  const {limt, page} = req.query
  //  UserModel.paginate({}, {limit: 2, page: 2})
  UserModel.paginate({email: {$regex: /4@Mail$/, $options: "i"}}, {limit: 3, page: 1})
   .then((data)=>{
    console.log(data);
    res.send(data)
   })
   //
   // task --> try on your own
  // pagination using limit and skip


};


const createUser = (req, res) => {
    // get the data coming from client
    // console.log("user data", req.body);
    //create for single array
    // UserModel.create(req.body)
    //   .then((data) => {
    //     console.log("data", data);
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });

    //create for multiple user at once
    // UserModel.insertMany(req.body)
    //   .then((data) => {
    //     console.log("data", data);
    //     res.send(data);
    //   })
    //   .catch((err) => {
    //     res.send(err);
    //   });
    // we have to create a user using this data in our DB
    // res.send("creating user")
  };

const getUserAddress = (req, res)=>{
    res.send('address of user')
}

const getUserOrders = (req, res)=>{
    res.send('user orders')
}

const updateUser = (req, res) => {
  console.log("params", req.params);

  // UserModel.findByIdAndUpdate(
  //   req.params.id,
  //   { $set: req.body },
  //   { new: true } // used for getting updated data
  // ).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  // UserModel.updateOne({ email: req.params.email }, req.body, {
  //   upsert: true, // it will create the data if not found
  // }).then((data) => {
  //   console.log("data", data);
  //   res.send(data);
  // });

  UserModel.updateMany({ password: "12345" }, req.body).then((data) => {
    console.log(data);
    res.send(data);
  });
};

//<===================Lec20 ka code yaha se start hua ha =====================================>
//
// const deleteUser = (req, res)=>{
//   console.log('params', req.params)
//   const {id} = req.params;
// UserModel.findByIdAndDelete(id)
// .then((data)=>{
// res.send(data)
// });
// };

//By using async await 
// const deleteUser = async (req, res) => {
//   console.log("params", req.params);
//   const { id } = req.params;
//   // try {
//   //   const result = await UserModel.deleteOne({ email: "Student3@mail" });
//   //   console.log(result);
//   //   res.send("user deleted successfully");
//   // } catch (err) {
//   //   res.send("something went wrong!!");
//   // }

  

//   try {
//     const result = await UserModel.deleteMany({ age: 25 });
//     console.log(result);
//     res.send("user deleted successfully");
//   } catch (err) {
//     res.send("something went wrong!!");
//   }
// };

// task
const deleteUser = (req, res)=>{
    console.log('params', req.params)
    const {id} = req.params;
UserModel.findOneAndDelete({email: 'Student3@mail'})
.then((data)=>{
res.send(data)
});
};


module.exports = {getUserList, createUser, getUserAddress, getUserOrders, getUser, updateUser, deleteUser};
*/

//<===============End ofLec20March15:Crud op using mongoose & MongoDB, Data Validation, Pagination, Deleting=============>
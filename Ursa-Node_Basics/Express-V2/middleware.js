// <===============Lec11March1: Building Restful API using Express-CRUD for Ecommerce API===============>//

//1)
/*
const checkLogInStatus = (req, res, next) => {
    // check the username
    // match password
    console.log("running checkLogInStatus in middleware")
    if(req.path === '/product'){
    next();
    }else{
        res.send('you are not logged in user')
    }
};

module.exports = { checkLogInStatus };
*/

//2)
const checkLogInStatus = (req, res, next) => {
    // check the username
    // match password
    console.log("running checkLogInStatus in middleware")
    if(req.path === '/product'){
    next();
    }else{
        res.send('you are not logged in user')
    }
};

const checkUser = (req, res, next) => {
    console.log('running middleware 2');
    next();
}

module.exports = { checkLogInStatus, checkUser }; 
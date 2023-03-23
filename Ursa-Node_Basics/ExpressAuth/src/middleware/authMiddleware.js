//<===============Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>

const auth = (req, res, next)=> {
console.log('from Auth middleware');
next()
}
module.exports = {auth}
//<===============END: Lec23March18:Authentication & Authorisation, Using Lodash, Storing secrets in environments=============>
// 1)
// console.log("home file");

// const getProfile = () => {
//   console.log("getting profile");
//   fetch("http://localhost:6800/user/profile")
//     .then((res) => {
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };

// 2)
console.log("home file");
let token = '';
const getProfile = () => {
  console.log("getting profile");
  fetch("http://localhost:6800/user/profile",{
    headers: {
        authorization: 
        "Bearer: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0OTBhMTM3MDBhZGYzMzc4MmI4ZDgxMSIsImVtYWlsIjoibnVwdXJAZ21haWwuY29tIiwiaWF0IjoxNjg3MjAwMTI4fQ.EcjGSyZ_c-WZckuOXJmIOznYfJmnnJDVOZxxCGgDXRk"
    }
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
        console.log(err);
            });
        };



 const Login = () =>{
//method  should be post
//req.body should be passed in header
// req.body type should be json
// content-type: application/json
 }       
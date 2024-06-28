
// const roleMiddleware = async (req, res, next) => {
//   // bakal ngecek ketika menambahkan user, role yangg dikirim tidak boleh selain 'user'
//   req.body.name = "Lil " + req.body.name;
//   next();
// };

// module.exports = { roleMiddleware };

// genderCheckMiddleware.js
// const genderCheckMiddleware = (req, res, next) => {
//     if (req.body && req.body.gender && req.body.name) {
//       const gender = req.body.gender.toLowerCase();
//       if (gender === 'male') {
//         req.body.name = "Mr " + req.body.name;
//       } else if (gender === 'female') {
//         req.body.name = "Mrs " + req.body.name;
//       }
//     }
//     next();
//   };
  
//   module.exports = genderCheckMiddleware;
  

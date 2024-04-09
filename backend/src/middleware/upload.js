const multer=require('multer');

// const storage=multer.diskStorage({
//     destination:(req,res,cb)=>{
//           cb(null,'public/images')
//     },
//     filename:(req,res,cb)=>{
//         cb(null,file.filename+"_"+Date.now()+path.extname(file.originalname))
//     }
// })

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'public/images');
//     },
//     filename: (req, file, cb) => {
//         cb(null,file.originalname)
//     }
// });

const storage = multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, 'public/images')
    },
    filename: function (req, file, callback) {
      const uniqueSuffix = Date.now() 
      callback(null,uniqueSuffix+file.originalname)
    }
  })


 const upload=multer({
    storage:storage
 })
module.exports=upload;
//the following code we are using for upload image

import multer from "multer";
import path from 'path';


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname, './public/images'));
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
      //ye filename se extension ko nikalega
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext)
    }
  })
  
  const upload = multer({storage})
  export default upload;
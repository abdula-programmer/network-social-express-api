const express = require('express')
const router = express.Router();
const multer = require('multer');


const uploadDestionation = 'upload';

//

const storage = multer.diskStorage({
  destination: uploadDestionation,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
})

const uploads = multer({storage})


router.get('/register', (req, res) => {
  res.send("Register")
})




module.exports = router
const router = require('express-promise-router')()

const imageController = require('../controllers/imageController')
const upload = require('../helpers/uploadHelper')

router.route('/')
  .get(imageController.getAllImages)
  .post(upload.single('path'), imageController.newImage)


module.exports = router
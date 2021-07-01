const Image = require('../models/Image')

const getAllImages = async (req, res, next) => {
  const images = await Image.find({})
  return res.status(201).json({
    data: images
  })
}

const newImage = async (req, res, next) => {
  const fileName = req.file.filename
  const basePath = `${req.protocol}://${req.get('host')}/public/uploads/`

  const newImage = new Image({
    path: `${basePath}${fileName}`
  })

  await newImage.save()

  return res.status(201).json({
    data: newImage
  })
}

module.exports = {
  getAllImages,
  newImage
}
// this middleware for upload image 

const cloudinary = require('cloudinary');

cloudinary.v2.config({
  cloud_name: 'dyvoxcqpt',
  api_key: '531256787311845',
  api_secret: 'PqWTxeO6qWUugg7380bVOAlIswg',
  secure: true,
});

const uploadfile = async(filePath)=>{
  try {
    const result = await cloudinary.uploader.upload(filePath)
    console.log(result)
    return result
  } catch (error) {
    console.log('error :- ',error)
  }
}

module.exports = {
  uploadfile
}

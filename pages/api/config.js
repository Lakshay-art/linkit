const cloudinary = require('cloudinary').v2;

// Configure your cloud name, API key and API secret:

const myconfig = cloudinary.config({
    cloud_name: 'lakshaythegupta',
    api_key: '613344191461828',
    api_secret: 'D0dVHD-xxygDJruBSv6l5-A2ARg',
    secure: true
  });

exports.myconfig = myconfig;
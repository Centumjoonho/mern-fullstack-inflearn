const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path');

const endpoint = 'https://kr.object.ncloudstorage.com';
const region = 'kr-standard';
const config = require('../config/key.js')



const S3 = new S3Client({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId: config.access_key,
        secretAccessKey: config.secret_key
    }
});


function setUpload(Bucket, url) {
    const upload = multer({
        storage: multerS3({
            s3: S3,
            bucket: Bucket,
            acl: "public-read-write",
            key: function (req, file, cb) {
                let extension = path.extname(file.originalname);
                cb(null, url + Date.now().toString() + extension);
            },
        }),
    }).single("file");
    //single("file"); 매우 중요 ! 
    return upload;
}

module.exports = setUpload;

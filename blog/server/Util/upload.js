const { S3Client } = require('@aws-sdk/client-s3')
const multer = require('multer')
const multerS3 = require('multer-s3')
const path = require('path');

const endpoint = 'https://kr.object.ncloudstorage.com';
const region = 'kr-standard';
const access_key = 'ZVuW8vFDcMkWhOLkzEcA';
const secret_key = '2FIJHBMuJQYDVhtHfXJ5sUVNfDISRIce1VzwY4EL';


const S3 = new S3Client({
    endpoint: endpoint,
    region: region,
    credentials: {
        accessKeyId: access_key,
        secretAccessKey: secret_key
    }
});


function setUpload(Bucket) {

    const upload = multer({
        storage: multerS3({
            s3: S3,
            bucket: Bucket,
            acl: "public-read-write",
            key: function (req, file, cb) {
                let extension = path.extname(file.originalname);
                cb(null, "post/" + Date.now().toString() + extension);
            },
        }),
    }).single("file");
    //single("file"); 매우 중요 ! 
    return upload;
}

module.exports = setUpload;

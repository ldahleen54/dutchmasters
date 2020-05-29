var params = {
    Bucket: "dutchmasters"
};
// 2006 2009 2008 2019
// aws access 
process.env.AWS_ACCESS_KEY_ID     = 'AKIAIJZDGCORRPXJRL3Q';
process.env.AWS_SECRET_ACCESS_KEY = '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';
process.env.AWS_REGION            = 'us-east-1';
var AWS = require('aws-sdk');
var fs = require('fs');
// var credentials = new AWS.SharedIniFileCredentials({profile: 'default'});
// console.log(credentials);
// AWS.config.credentials = credentials;
// var creds = new AWS.Credentials('AKIAJLTQXDD4IVQXO7OA', 'VsONU6wL5iavghmVLzI1vtdhGWAL0qzJriuxWnR8', 'session');
var s3  = new AWS.S3();
// AWS.config.getCredentials(function(err) {
//     if (err) console.log(err.stack);
//     // credentials not loaded
//     else {
//       console.log("Access key:", AWS.config.credentials.accessKeyId);
//       console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
//     }
//   });
// updates the s3objects json
let pictures = "test";
module.exports = {
    getPictures: () => {
        let datax = s3.listObjectsV2(params, function(error, data) {
            if(error) {
                console.log(error, error.stack);
            } else {
                // doesn't change the global variable
                fs.writeFile('s3objects.json', JSON.stringify(data), function (error) {
                    if (error) throw error;
                    console.log('The "data to append" was appended to file!');
                  });
            }
        });
        console.log(datax);
        return pictures
    }
}




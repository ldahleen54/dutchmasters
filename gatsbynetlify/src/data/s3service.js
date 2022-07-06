var params = {
    Bucket: "dutchmasters"
};
process.env.AWS_PROFILE = 'default';
var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
var s3  = new AWS.S3();

s3.listObjectsV2(params, function(error, data) {
    if(error) {
        console.log(error, error.stack);
    } else {
        // doesn't change the global variable
        fs.writeFile(`${__dirname}/s3objects.json`, JSON.stringify(data), function (error) {
            if (error) throw error;
            console.log('Retrieved list of objects. Saved to s3objects.json.');
        });
    }
});

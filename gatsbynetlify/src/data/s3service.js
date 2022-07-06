let params = {
    Bucket: "dutchmasters",
    Prefix: "2009/"
};
const years = [
    "2006",
    "2008",
    "2009",
    "2019"
]
process.env.AWS_PROFILE = 'default';
var AWS = require('aws-sdk');
var fs = require('fs');
var credentials = new AWS.SharedIniFileCredentials();
AWS.config.credentials = credentials;
var s3  = new AWS.S3();

for(let i = 0; i < years.length; i++) {
    params.Prefix = years[i] + "/";
    s3.listObjectsV2(params, function(error, data) {
        if(error) {
            console.log(error, error.stack);
        } else {
            fs.writeFile(`${__dirname}/${years[i]}s3objects.json`, JSON.stringify(data), function (error) {
                if (error) throw error;
                console.log(`Retrieved list of objects. Saved to ${years[i]}s3objects.json.`);
            });
        }
    });
}



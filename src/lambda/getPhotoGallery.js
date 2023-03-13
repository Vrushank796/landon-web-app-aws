var AWS = require('aws-sdk');

AWS.config.update({
  region: 'ca-central-1',
});

var dynamodb = new AWS.DynamoDB.DocumentClient();

exports.handler = function (event, context, callback) {
  var params = {
    TableName: 'PhotoGallery',
  };

  dynamodb.scan(params, function (err, data) {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data.Items);
    }
  });
};

var aws = require('aws-sdk');
var multer = require('multer');
var multerstorages3 = require('multer-storage-s3-public');

exports.render = function(req, res) {
    res.render('index', {
        title: 'upload'
    });
};

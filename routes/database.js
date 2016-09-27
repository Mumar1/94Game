var express = require('express');
var router = express.Router();

var monk = require('monk');
var db = monk('localhost:27017/94Game');

router.get('/', function(req, res) {
    var collection = db.get('Levels');
    collection.find({}, function(err, levels){
        if (err) throw err;
      	res.json(levels);
    });
});

module.exports = router;

var async = require("async");

module.exports = {
    genHash: function(username, password, doneCallback) {
        async.waterfall([
            function(hashCallback) {
                bcrypt.genSalt(10, hashCallback);
            },
            function(salt, callback) {
                bcrypt.hash(password, salt, callback);
            }
        ], function(err, hash) {
            doneCallback(err, hash);
        })
    }
};
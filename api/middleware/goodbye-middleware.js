var request = require('request');

module.exports = function() {

    // TODO Load from Config file
    var service = "http://localhost:10011/goodbye";

    return function(req, res, next) {

        if (req.path === "/goodbye") {
            var name = req.query.name;
            var url = service + (name ? "?name=" + name : "");
            console.log('Executing request: ' + url);
            request.get(url).pipe(res);
        }
        else {
            console.log('Executing request: ' + req.originalUrl);
            next();
        }
    };
};


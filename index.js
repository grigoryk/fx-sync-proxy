var FxSync = require('fx-sync'),
    bodyParser = require('body-parser'),
    express = require('express'),
    _ = require('underscore'),
    stream = require('stream'),
    cors = require('cors'),
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

var corsOptions = {
    origin: "*"
};

app.post('/history', cors(corsOptions), function(req, res) {
    var sync = new FxSync({ email: req.body.email, password: req.body.password }),
       limit = req.body.limit;

    sync
        .fetch('history')
        .then(
            function(results) {
                res.json(_.first(results, limit));
            },
            function(err) {
                res.status(err.code).json({"error": err});
            }
        );
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
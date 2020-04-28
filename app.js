const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");

var session = require('express-session');

const cors = require('cors')
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");



const path = require("path");

dotenv.config();

app.use(express.static(path.join(__dirname, "src")));

// app.use(express.static(__dirname + '/assets')); // set the static files location /public/img will be /img for users
// app.use('assets/public', express.static(__dirname + 'assets/public'));

app.use(cors());
//middleware
app.use(morgan("dev"));
//app.use(myOwnMiddleWare);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(session({secret:'XASDASDA'}));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(expressValidator());
var rroute = require('path').join(__dirname, 'src/routes')
require('fs').readdirSync(rroute).forEach(function(file) {
    var routeFile = require(rroute + '/' + file);
    app.use('/api/v1/', routeFile)
})



const port =  3010;
app.listen(port, () => {
    console.log(`Server connected at  ${port}`);
});
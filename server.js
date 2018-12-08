//import {getFamily, init} from "./src/database";
const database = require("./src/database")
const init = database.init;
const clckml = require("./src/clckml");
const getRecommended = clckml.getRecommended;
//import {getRecommended} from "./src/clckml";


var express = require('express');
var app = express();

app.get('/getmatches/:id', function (req, res) {
    getRecommended(req.params.id).on("response", function (e) {
        e.on("data", function (f){
            return res.send("Here are your matches: " + f.toString());
        });
    });
});

app.listen(3000, function () {
    init();
    console.log('Example app listening on port 3000!');
});
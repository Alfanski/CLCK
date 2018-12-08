//import {getFamily, init} from "./src/database";
const database = require("./src/database")
const init = database.init;
const clckml = require("./src/clckml");
const getRecommended = clckml.getRecommended;


var express = require('express');
var app = express();

app.get('/getmatches/:user_id/', function (req, res) {
    console.log("IDs", req.params.user_id, req.params.lecture_id);
    getRecommended(req.params.user_id).on("response", function (e) {
        e.on("data", function (f){
            return res.send("Here are your matches: " + f.toString());
        });
    });
});

app.get('/users/', function (req, res){
    console.log("Getting user profiles for users ", req.body);
    const user_ids = req.body.split(",")
    queryUsers(user_ids).then( (users) => {
        res.send("The requested users: "+ users);
    });
});

app.listen(443, function () {
    init();
    console.log('Example app listening on port 443!');
});
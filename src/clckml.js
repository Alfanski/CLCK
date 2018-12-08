const req = require("request");
const uri = "https://europewest.services.azureml.net/workspaces/732ab86543ff493daa1cb976803515f8/services/a15a857d7be842a5a891adb291403544/execute?api-version=2.0&format=swagger";
const apikey = "OWUpndIbDSgPJJXRWJrSbevGSSjS/ti3H54EPUUtc5dH2/7XC7RNZYb9ZuBtj0PXl7HsXF5EgrhNpEjbIB2BxA==";

const getRec = function getRecommended(userId){
    const data = {lecture_id: userId,
        math_rating:1};
    const options = {
        uri: uri,
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + apikey,
        },
        body: '{"Inputs":{"test123":[{"student_id":"'+userId+'"}]},"GlobalParameters":{}}'
    }
    return req(options, (err, res, body) => {
        if (!err && res.statusCode == 200) {
            return body;
        } else {
            console.log(res.statusCode, JSON.stringify(res));
        }
    });
}

module.exports={
    getRecommended: getRec
}
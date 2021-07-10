const r = require('./route');
const getRawBody = require('raw-body');
/*
if you open the initializer feature, please implement the initializer function, as below:
module.exports.initializer = function(context, callback) {
    console.log('initializing');
    callback(null, '');
};
*/

module.exports.handler = function(req, resp, context) {
    console.log('hello world')
    console.log(req.url)
    resp.setHeader('content-type', 'application/json')
    var uri = (req.url).split('/')
    if(uri.length == 0) {
    resp.send(JSON.stringify({'code': 400, 'body': 'Bad Request'}, null, ''))
    } else {
    var route = uri[uri.length-1]
    console.log(route)
    switch(req.method) {
     case 'GET':
     resp.send(JSON.stringify({'code': 200, 'body': r.get(route,null)}))
     break
     case 'POST':
     getRawBody(req, (err, body) => {
            console.log(body)
            resp.send(JSON.stringify({'code': 200, 'body': r.get(route, body.toString())}));
        });
     break
     case 'DELETE':
     resp.send(JSON.stringify({'code': 200, 'body': r.get(route,null)}))
    }
    }
    }
let http = require('http');
let url = require('url');

function start(route, handle){
    function onRequest(request, response) {
        let pathname = url.parse(request.url).pathname;
        if( pathname == '/favicon.ico'){
            response.writeHead(200, { 'Content-Type': 'image/x-icon'});
            return response.end
        }

        let queryData = url.parse(request.url, true).query;

        route(pathname,handle,response, queryData.productId);
    }
    
    http.createServer(onRequest).listen(8888);
}

exports.start = start;
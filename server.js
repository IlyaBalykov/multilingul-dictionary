const http = require("http");
const fs = require("fs");

const server = http.createServer(function (request, response) {
    fs.readFile('index.html', (error, data) => {
        if(error) {
            response.writeHead(500);
            response.end('Some error with index.html')
        }

        response.writeHead(200, {'Content-Type': 'text/html'})
        response.end(data)
    })
});
server.listen(3000);
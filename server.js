
const http = require("http");
const fs = require("fs");
const handler = require('./requestHandler.js')


http.createServer(async (request, response) =>{
    //@mytodo refactor code for request with no

    if(request.url === "/new-word"){
        let buffer = ""
        for await (const data of request){
            buffer+=data
        }

        handler(buffer)

        response.end('Data received',()=>console.log('Response end'))
    } else {
        fs.readFile('index.html', (error, data) => {
            if (error) {
                response.writeHead(500);
                response.end('Some error with index.html')
            }

            response.writeHead(200, {'Content-Type': 'text/html'})
            response.end(data)
        })
    }
}).listen(3000, ()=> console.log('Server started: localhost:3000'));
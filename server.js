
const http = require("http");
const fs = require("fs");
// const mysql = require('mysql2');
const handler = require('./requestHandler.js')

http.createServer(async (request, response) =>{
    //@mytodo refactor code for request with no

    if(request.url == "/new-word"){
        let buffer = ""
        for await (const data of request){
            buffer+=data
        }

        //MySQL connect
        handler(buffer)
        // const guatoValue = [`${guaWord}`, '-', '-', '-', '-', '-', '-', '-'];
        // const sqlQuery = `INSERT INTO guato_dictionary.TRANSLATION (GUA, RUS, ENG, POR, TRANSCRIPTION, IMG_SRC, AUDIO_SRC, COMMENT) VALUES (?,?,?,?,?,?,?,?)`;
        //
        // const connection = mysql.createConnection(
        //     {
        //         host: 'localhost',
        //         user: 'root',
        //         database: 'guato_dictionary',
        //         password: 'unstoppable'
        //     }
        // );
        // connection.query(sqlQuery, guatoValue, function (err, results, fields) {
        //     if(err){
        //         console.log(err)
        //     } else {
        //         console.log(results)
        //     } //data
        //     // console.log(fields)  //meta data jf rows
        // })
        //
        // connection.end(function (err) {
        //     if(err){
        //         return console.log('Error! ' + err.message)
        //     }
        //     console.log('Connection closed.')
        // })
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
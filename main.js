const mysql = require('mysql2');
// import mysql from './node_modules/mysql2'

const connection = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        database: 'guato_dictionary',
        password: 'unstoppable'
    }
);

//Connetcion test
// connection.connect(function (err){
//     if(err) {
//         return console.error('Error: ' + err.message)
//     } else {
//         console.log('Connection is OK!')
//     }
// })

// connection.query('SELECT * FROM guato_dictionary.TRANSLATION', function (err, results, fields) {
//     console.log(err) //error
//     console.log(results) //data
//     console.log(fields)  //meta data jf rows
// })
//
// connection.end(function (err) {
//     if(err){
//         return console.log('Error! ' + err.message)
//     }
//     console.log('Connection closed.')
// })

const guaWord = document.getElementById('input-gua-word');
const submitBtn = document.getElementById('input-submit-btn');
const guatoValue = [`${guaWord}`, '-', '-', '-', '-', '-', '-', '-'];
const sqlQuery = `INSERT INTO guato_dictionary.TRANSLATION (GUA, RUS, ENG, POR, TRANSCRIPTION, IMG_SRC, AUDIO_SRC, COMMENT) VALUES (?,?,?,?,?,?,?,?)`;

submitBtn.onclick = function () {
    connection.query(sqlQuery, guatoValue,function (err, results, fields) {
        if(err){
            console.log(err)
        } else {
            console.log(results)
        } //data
        // console.log(fields)  //meta data jf rows
    })

    connection.end(function (err) {
        if(err){
            return console.log('Error! ' + err.message)
        }
        console.log('Connection closed.')
    })
}


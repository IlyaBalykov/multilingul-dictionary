const mysql = require('mysql2');

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

connection.query('SELECT * FROM guato_dictionary.TRANSLATION', function (err, results, fields) {
    console.log(err) //error
    console.log(results) //data
    console.log(fields)  //meta data jf rows
})

connection.end(function (err) {
    if(err){
        return console.log('Error! ' + err.message)
    }
    console.log('Connection closed.')
})

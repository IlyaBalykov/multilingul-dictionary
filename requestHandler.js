module.exports = function postHandler(bodyForm) {
    const mysql = require('mysql2');
    const guatoValue = [`${bodyForm}`, '-', '-', '-', '-', '-', '-', '-'];
    const sqlQuery = `INSERT INTO guato_dictionary.TRANSLATION (GUA, RUS, ENG, POR, TRANSCRIPTION, IMG_SRC, AUDIO_SRC, COMMENT) VALUES (?,?,?,?,?,?,?,?)`;

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'guato_dictionary',
            password: 'unstoppable'
        }
    );
    connection.query(sqlQuery, guatoValue, function (err, results, fields) {
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
module.exports = function postHandler(bodyForm) {
    const mysql = require('mysql2');
    let guatoValue = ['-', '-', '-', '-', '-', '-', '-', '-'];
    const sqlQuery = `INSERT INTO guato_dictionary.TRANSLATION (GUA, RUS, ENG, POR, TRANSCRIPTION, IMG_SRC, AUDIO_SRC, COMMENT) VALUES (?,?,?,?,?,?,?,?)`;

    const connection = mysql.createConnection(
        {
            host: 'localhost',
            user: 'root',
            database: 'guato_dictionary',
            password: 'unstoppable'
        }
    );
    // Handler of body form
    const complexData = bodyForm.split('&')
    for (const parameter of complexData) {
        const [parameterName, parameterValue] = parameter.split('=')
        if(parameterName === "guaword") guatoValue[0] = parameterValue
        if(parameterName === "guatranscription") guatoValue[1] = parameterValue
        if(parameterName === "engtranslation") guatoValue[2] = parameterValue
    }

    connection.query(sqlQuery, guatoValue, function (err, results, fields) {
        if(err){
            console.log(err)
        } else {
            console.log(results)
        } //data
        // console.log(fields)  //meta data of rows
    })

    connection.end(function (err) {
        if(err){
            return console.log('Error! ' + err.message)
        }
        console.log('Connection closed.')
    })
}
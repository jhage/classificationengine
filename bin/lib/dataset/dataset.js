const fs = require('fs');
const JSON_FILE_PATH = './bin/lib/dataset/dataset.txt'


module.exports.data = ()=>{

    try{
        const filedataset = fs.readFileSync(JSON_FILE_PATH)
        return JSON.parse(filedataset)
    
    }catch (exception) {

        console.error(`Erro ao acessar arquivo ${JSON_FILE_PATH}`)
        return '{"Mensagem": "Arquivo Vazio"}'
    }

}





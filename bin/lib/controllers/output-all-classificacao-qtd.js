const {getcount: motor} = require('../utilities/motor')


const msgResposta = (criterio, valor, qtd)=>{

    return {Resultado: {criterio: criterio, valor: valor, QTD: qtd}}
}

module.exports.outputAllClassificacaoQtd = (body)=>{

    return motor(body.criterio, body.valor, msgResposta)
}
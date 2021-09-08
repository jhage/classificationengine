const {getpeople: motor} = require('../utilities/motor')

const msgResposta = (criterio, valor, pessoas)=>{

    return {Resultado: {criterio: criterio, valor: valor, Pessoas: pessoas}}
}

module.exports.outputRelacaoPessoasPorCriterio = (body)=>{

    return motor(body.criterio, body.valor, msgResposta)
}
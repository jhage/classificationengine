const express = require('express')
const server = express()
const {outputAllClassificacaoQtd} = require('../bin/lib/controllers/output-all-classificacao-qtd')
const {outputRelacaoPessoasPorCriterio} = require('../bin/lib/controllers/output-relacao-pessoas-by-criterio')


const DEFAULT_PORT = 8080
const ALL_CLASSIFICACAO_QTD_PATH = "/all/classificacao/qtd"
const RELACAO_PESSOAS_POR_CRITERIO_PATH = "/relacao/pessoas/criterio"

server.use(express.json())

server.post(ALL_CLASSIFICACAO_QTD_PATH, (req, res) => {

    const result = outputAllClassificacaoQtd(req.body)
    return res.json(result)
})

server.post(RELACAO_PESSOAS_POR_CRITERIO_PATH, (req, res) => {
    const result = outputRelacaoPessoasPorCriterio(req.body)
    return res.json(result)
})

server.listen(DEFAULT_PORT, () =>{

    console.log(`Servidor iniciado na porta ${DEFAULT_PORT}: http://localhost:${DEFAULT_PORT}/`)
})

module.exports = server



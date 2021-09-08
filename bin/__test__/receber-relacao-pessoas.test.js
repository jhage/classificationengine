

const supertest = require('supertest')
const server = require('../index')


const ALL_CLASSIFICACAO_QTD_PATH = "/all/classificacao/qtd"
const RELACAO_PESSOAS_POR_CRITERIO_PATH = "/relacao/pessoas/criterio"

test('Recebeu relacao pessoas, expera retorno 200 e quantidade de maior que 0', async () => {


    const response = await supertest(server)
    .post(ALL_CLASSIFICACAO_QTD_PATH)
    .send({
            criterio: 'Sex',
            valor: 'female'
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.Resultado.QTD).toBeGreaterThan(0)
})


test('Recebeu relacao pessoas, expera retorno 200 e lista de Pessoas', async () => {

    const RE_RESPONSE = /.+\w+.+/
    const RE_NOT_RESPONSE = /.+exception+.+/
    const response = await supertest(server)
    .post(RELACAO_PESSOAS_POR_CRITERIO_PATH)
    .send({
            criterio: 'Age',
            valor: 14
      })

    expect(response.statusCode).toEqual(200)
    expect(response.body.Resultado.Pessoas).toMatch(RE_RESPONSE)
    expect(response.body.Resultado.Pessoas).not.toMatch(RE_NOT_RESPONSE)
})
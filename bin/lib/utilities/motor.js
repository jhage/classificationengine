
const {data} = require('../dataset/dataset')
let pessoas = data()



const getcount = (criterio, valor, func)=>{

    console.log(`Count Filtrar pelo criterio:${criterio} e valor:${valor}`)
    let result =[]
    result = pessoas.filter(element => element[criterio]===valor) 
    return func(criterio, valor, result.length) 
}

const getpeople = (criterio, valor, func)=>{
 
    console.log(`People Filtrar pelo criterio:${criterio} e valor:${valor}`)
    const reducer = (accumulator, currentValue) => accumulator + ',' + currentValue['Name']
    let result =[]
    
    try{
        founds = pessoas.filter(element => element[criterio]===valor) 
        result = founds.reduce(reducer)
        return func(criterio, valor, result)
   
    }catch (exception) {

        const MSG = `Erro ao Filtrar pelo criterio:${criterio} e valor:${valor}, exception: ${exception}`
        console.error(MSG)
        return func(criterio, valor, MSG) 
    }
    
    
}


module.exports = { getcount, getpeople}





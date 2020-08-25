const mergeGraphQLSchemas = require('merge-graphql-schemas')
const path = require('path')

const { fileLoader } = mergeGraphQLSchemas

const arquivos = (modulos, tipo) => [].concat.apply([], 
  modulos.map( modulo => {
  const caminho = path.join(__dirname, `./${modulo}/${tipo}`)
  return fileLoader(caminho)
}))

module.exports = { arquivos }
const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')

const { fileLoader } = mergeGraphQLSchemas
const arquivos = path.join(__dirname, '../user/resolvers')
const arquivosCarregados = fileLoader(arquivos)

module.exports = arquivosCarregados
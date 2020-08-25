const mergeGraphQLSchemas = require('merge-graphql-schemas')
const { mergeTypes } = mergeGraphQLSchemas

const { MODULOS } = require('./config')
const { arquivos } = require('./util')

const arquivosCarregados = arquivos(MODULOS, 'schemas')
const schemas = mergeTypes(arquivosCarregados)

module.exports = schemas
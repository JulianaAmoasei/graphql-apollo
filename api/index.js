const { ApolloServer } = require('apollo-server')
const UsersAPI = require('./user/datasources')

const path = require('path')
const mergeGraphQLSchemas = require('merge-graphql-schemas')
const { fileLoader, mergeTypes } = mergeGraphQLSchemas

const schemas = (() => {
  const arquivosSchemas = path.join(__dirname, './user/schemas')
  const arquivosSchemasCarregados = fileLoader(arquivosSchemas)
  return mergeTypes(arquivosSchemasCarregados)
})()

const resolvers = (() => {
  const arquivosResolvers = path.join(__dirname, './user/resolvers')
  return fileLoader(arquivosResolvers)
})()

const server = new ApolloServer({
  typeDefs: schemas,
  resolvers: resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 servidor servindo em ${url}`)
})
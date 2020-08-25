const { ApolloServer } = require('apollo-server')
const UsersAPI = require('./user/datasources')
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      usersAPI: new UsersAPI(),
    }
  },
})

server.listen().then(({ url }) => {
  console.log(`🚀 servidor servindo em ${url}`)
})
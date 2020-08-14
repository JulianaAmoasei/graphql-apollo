const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./schemas')
const resolvers = require('./resolvers')

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
const { GraphQLScalarType } = require('graphql');

const resolvers = {
  // That’s the downside to using custom scalars. They’re not supported out of the box, we need to make our custom logic available to any projects that want to use them. 
  DateTime: new GraphQLScalarType({
    name: 'DateTime',
    description: 'string de data e horário no formato ISO-8601',
    serialize: (value) => value.toISOString(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query: {
    users: (_, __, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (_, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionaUser: async (_, { user }, { dataSources }) => dataSources.usersAPI.adicionaUser(user),
    atualizaUser: async (_, args, { dataSources }) => dataSources.usersAPI.atualizaUser(args),
    removeUser: (_, { id }, { dataSources }) => dataSources.usersAPI.removeUser(id)
  }
}

module.exports = resolvers
const resolvers = {
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
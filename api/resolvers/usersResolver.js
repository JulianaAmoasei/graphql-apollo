const resolvers = {
  Query: {
    users: (root, _, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionaUser: (root, args, { dataSources }) => dataSources.usersAPI.adicionaUser(args),
    atualizaUser: (root, args, { dataSources }) => dataSources.usersAPI.atualizaUser(args),
    removeUser: (root, { id }, { dataSources }) => dataSources.usersAPI.removeUser(id)
  }
}

module.exports = resolvers
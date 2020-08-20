const resolvers = {
  Query: {
    users: (root, _, { dataSources }) => dataSources.usersAPI.getUsers(),
    user: (root, { id }, { dataSources }) => dataSources.usersAPI.getUserById(id)
  },
  Mutation: {
    adicionaUser: async (root, args, { dataSources }) => {
      args = await JSON.parse(JSON.stringify(args))
      return dataSources.usersAPI.adicionaUser(args.user)
    },
    atualizaUser: async (root, args, { dataSources }) => {
      args = await JSON.parse(JSON.stringify(args))
      return dataSources.usersAPI.atualizaUser(args)
    },
    removeUser: (root, { id }, { dataSources }) => dataSources.usersAPI.removeUser(id)
  }
}

module.exports = resolvers
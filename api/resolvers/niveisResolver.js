const Niveis = require('../controllers/NiveisController')
const niveis = new Niveis()

const resolvers = {
  Query: {
    niveis: () => niveis.listaNiveis(),
    nivel: (root, { id }) => niveis.buscaNivelPorId(id)
  },
  Mutation: {
    adicionaNivel: (root, args) => niveis.adicionaNivel(args),
    atualizaNivel: (root, args) => niveis.atualizaNivel(args),
    deletaNivel: (root, { id }) => niveis.deletaNivel(id)
  }
}

module.exports = resolvers
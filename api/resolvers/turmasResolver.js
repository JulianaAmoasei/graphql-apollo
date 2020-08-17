const Turmas = require('../controllers/TurmasController')
const turmas = new Turmas()

const resolvers = {
  Query: {
    turmas: () => turmas.listaTurmas(),
    turma: (root, { id }) => turmas.buscaTurmaPorId(id)
  },
  Mutation: {
    adicionaTurma: (root, args) => turmas.adicionaTurma(args),
    atualizaTurma: (root, args) => turmas.atualizaTurma(args),
    deletaTurma: (root, { id }) => turmas.deletaTurma(id)
  }
}

module.exports = resolvers
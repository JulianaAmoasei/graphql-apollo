const Pessoas = require('../controllers/PessoasController')
const pessoas = new Pessoas()

const resolvers = {
  Query: {
    pessoas: () => pessoas.listaPessoas(),
    pessoa: (root, { id }) => pessoas.buscaPessoaPorId(id)
  },
  Mutation: {
    adicionaPessoa: (root, args) => pessoas.adicionaPessoa(args),
    atualizaPessoa: (root, args) => pessoas.atualizaPessoa(args),
    deletaPessoa: (root, { id }) => pessoas.deletaPessoa(id)
  }
}

module.exports = resolvers
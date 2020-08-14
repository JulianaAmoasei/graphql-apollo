const Pessoas = require('../controllers/PessoasController')
const pessoas = new Pessoas()

const resolvers = {
  Query: {
    pessoas: () => pessoas.listaPessoas(),
    pessoa: (root, { id }) => pessoas.buscaPessoaPorId(id)
  },
  Mutation: {
    adicionarPessoa: (root, args) => pessoas.adicionaPessoa(args),
    atualizarPessoa: (root, args) => pessoas.atualizaPessoa(args)
  }
}

module.exports = resolvers

//   atualizarCliente: (root, params) => Clientes.atualiza(params),
//   deletarCliente: (root, { id }) => Clientes.deleta(id)
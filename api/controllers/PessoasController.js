const { ModeloPessoas } = require('../models')
const modeloPessoa = new ModeloPessoas()

class PessoasController {

  async listaPessoas() {
    return modeloPessoa.getAll();
  }

  async buscaPessoaPorId(id) {
    return modeloPessoa.get(id)
  }

  adicionaPessoa(dadosPessoa) {
    const novaPessoa = {id: Date.now(), ...dadosPessoa}
    return modeloPessoa.create(novaPessoa)
  }

  atualizaPessoa(dadosAtualizados) {
    return modeloPessoa.update(dadosAtualizados)
  }

  async deletaPessoa(id) {
    return modeloPessoa.delete(id)
  }

}

module.exports = PessoasController